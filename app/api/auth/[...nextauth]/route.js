
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import * as cheerio from 'cheerio';

const ExtractUser = (html, userID) => {
    const $ = cheerio.load(html);

    const name = $('.ipsType_reset.ipsPageHead_barText').first().text().trim();
    const title = $('.ipsPageHead_barText span[style^="color"]').first().text().trim();
    var img = $('.ipsUserPhoto.ipsUserPhoto_xlarge').first().find('img').attr('src') || '';
    if (img && !img.startsWith('data:image')) {
        img = img.startsWith('//') ? `https:${img}` : img;
    }
    const posts = parseInt($('h4:contains("Posts")').parent().contents().not('.ipsType_minorHeading').text().trim(), 10)
    const joined = $('h4:contains("Joined")').next().text().trim();
    const daysWon = parseInt($('h4:contains("Days Won")').next().text().trim(), 10) || 0;
    const rank = $('.ipsFlex.ipsFlex-fd\\:column.ipsFlex-ai\\:center.ipsPadding_vertical\\:half h3.ipsType_reset').text().trim();
    const reputation = parseInt($('a[href*="/reputation/"] h3:contains("Reputation")').siblings('p.cProfileRepScore').text().trim(), 10) || 0;
    const communityAnswers = parseInt($('a[href*="/solutions/"] h3:contains("Community Answers")').siblings('p.cProfileSolutions').text().trim(), 10) || 0;

    return { userID, name, title, img, posts, joined, daysWon, rank, reputation, communityAnswers };

}
async function getCsrfAndSession () {
    const getUrl = 'https://gameguardian.net/forum/index.php?app=core&module=system&controller=ajax&do=getCsrfKey&path=/forum/login/';

    const response = await fetch(getUrl, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Connection': 'close',
        },
    });

    const data = await response.json();
    return {
        csrfKey: data.key,
        sessionToken: response.headers.get('Set-Cookie').match(/ips4_IPSSessionFront=([^;]+);/)[ 1 ],
    };
}
async function postLogin (csrfKey, sessionToken, auth, pwd) {
    const postUrl = 'https://gameguardian.net/forum/login/';

    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Cookie': `ips4_IPSSessionFront=${sessionToken};`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Csrf-Token': csrfKey,
            'Connection': 'close',
        },
        body: `auth=${auth}&password=${pwd}&remember_me=0&_processLogin=usernamepassword`,
        redirect: 'manual',
    });

    if (response.status === 301) {
        const setCookies = (await response.headers.get('set-cookie')).split(',');
        const ips4Cookies = setCookies
            .filter(cookie => cookie.includes('ips4_') && !cookie.includes('ips4_noCache=0'))
            .map(cookie => {
                const matches = cookie.match(/(ips4_[^=]+)=([^;]+)/);

                return matches ? { [ matches[ 1 ] ]: matches[ 2 ] } : null;
            })
            .filter(Boolean)
            .reduce((acc, cookie) => Object.assign(acc, cookie), {});
        const user = await get_User(ips4Cookies);
        return user;
    } else if (response.status === 200) {
        throw new Error('Incorrect auth or password, or user doesn\'t exist');
    } else {
        throw new Error('Unexpected status code:', response.status);
    }
}
async function get_User (ips4Cookies) {
    const getUrl = `https://gameguardian.net/forum/index.php?app=core&module=members&controller=profile&id=${ips4Cookies.ips4_member_id}`;
    const response = await fetch(getUrl, {
        method: 'GET',
        headers: {
            'Host': 'gameguardian.net',
            'Cookie': Object.entries(ips4Cookies).map(([ key, value ]) => `${key}=${value}`).join('; '),
            'Connection': 'close',
        },
    });

    const html = await response.text();
    return ExtractUser(html, ips4Cookies.ips4_member_id);
}
async function customLogin (credentials) {
    // Call your existing login logic here
    const { auth, pwd } = credentials;
    const { csrfKey, sessionToken } = await getCsrfAndSession();
    const user = await postLogin(csrfKey, sessionToken, auth, pwd);

    // If login is successful, map the data to the expected structure
    if (user) {
        return {
            id: user.userID,
            name: user.name,
            title: user.title,
            img: user.img,
            posts: user.posts,
            joined: user.joined,
            daysWon: user.daysWon,
            rank: user.rank,
            reputation: user.reputation,
            communityAnswers: user.communityAnswers
        };
    } else {
        return null;
    }
}
const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/',
        signOut: '/',

    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                auth: {},
                pwd: {},
            },
            authorize: async (credentials) => {
                const user = await customLogin(credentials);
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt ({ token, user }) {
            token.id = user.userID
            token.name = user.name
            token.title = user.title
            token.img = user.img
            token.posts = user.posts
            token.joined = user.joined
            token.daysWon = user.daysWon
            token.rank = user.rank
            token.reputation = user.reputation
            token.communityAnswers = user.communityAnswers
            return token
        },
        async session ({ session, token }) {
            return {
                ...session, user: {
                    id: token.userID,
                    name: token.name,
                    title: token.title,
                    img: token.img,
                    posts: token.posts,
                    joined: token.joined,
                    daysWon: token.daysWon,
                    rank: token.rank,
                    reputation: token.reputation,
                    communityAnswers: token.communityAnswers
                }
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

});

export { handler as GET, handler as POST }
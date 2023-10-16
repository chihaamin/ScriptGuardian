// authMiddleware.js
import { getSession } from 'next-auth/react';

const requireAuth = (handler) => async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        // If the user is not authenticated, redirect to the login page
        return res.redirect('/');
    }

    // If the user is authenticated, proceed to the requested handler
    return handler(req, res);
};

export default requireAuth;

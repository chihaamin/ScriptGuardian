import './globals.css'
import Providers from './provider'
import { getServerSession } from 'next-auth'

export const metadata = {
  title: 'GG Auth',
  description: 'A runtime GG scripts Auth provider',
}

export default async function RootLayout ({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className='bg-foreground-100' >
        <Providers className='flex justify-center items-center w-full h-screen ' session={ session }>
          { children }
        </Providers>
      </body>
    </html>
  )
}

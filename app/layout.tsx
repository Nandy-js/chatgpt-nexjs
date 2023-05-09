import SideBar from '@/components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>

          ) :(

          
        <div className='flex'>
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
          <SideBar/>
          </div>
          <ClientProvider/>
         
          <div className='bg-[#e2e8f0] flex-1'>  {children}</div>
       
        </div>
        )}
        </SessionProvider>
        </body>
    </html>
  )
}

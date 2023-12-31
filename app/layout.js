import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 w-screen h-16 bg-neutral-900 text-center text-2xl ">
          This is the navbar from layout.js
        </div>
        {children}
        </body>
    </html>
  )
}

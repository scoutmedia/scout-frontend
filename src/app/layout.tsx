import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope, Montserrat, Open_Sans } from 'next/font/google'
import Sidebar from './components/Sidebar/sidebar'

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300" , "400" , "500"],
  variable: "--font-opensans"
})

const montserrat =  Montserrat({
  subsets: ["latin"],
  weight: ["200" , "300" , "400" , "500"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: 'Scout',
  description: 'Automated media delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {children}  
        </body>
    </html>
  )
}

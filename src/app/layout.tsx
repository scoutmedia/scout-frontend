import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope, Montserrat, Open_Sans } from 'next/font/google'


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
  openGraph : {
    title: "ScoutMedia",
    description: "Next generation Automated Media Delivery"
  },
  title: "ScoutMedia",
  description: "Next generation Automated Media Delivery"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={montserrat.variable}>
        {children}  
        </body>
    </html>
    </ClerkProvider>

  )
}

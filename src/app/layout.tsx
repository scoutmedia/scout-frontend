import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import {Montserrat} from 'next/font/google'


const montserrat =  Montserrat({
  subsets: ["latin"],
  weight: ["200" , "300" , "400" , "500"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  openGraph : {
    type: "website",
    url: "https://scout-frontend.vercel.app/",
    title: "Scout",
    description: "Next Generation Automated Media Delivery",
    siteName: "Scout Media"
  },
  title: "Automated Media Delivery",
  description: "Next Generation Automated Media Delivery"
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

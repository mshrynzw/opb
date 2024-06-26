import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

const inter = Inter({ subsets : ["latin"] })

export const metadata : Metadata = {
  title : "opb",
  description : "Only Positive BBS"
}

export default function RootLayout({
                                     children
                                   } : Readonly<{
  children : React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body className={inter.className}>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  )
}

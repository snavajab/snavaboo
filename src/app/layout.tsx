import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
})
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snavaboo",
  description: "il gioco delle parole gay, d'altronde, per forza",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F1722" />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}

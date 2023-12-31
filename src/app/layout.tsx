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
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "0xtyson — Product Security & Regulatory Compliance",
  description:
    "Embedded and connected-product cybersecurity aligned to EU CRA, UN R155/R156, FDA premarket guidance, and ISO/SAE 21434. Threat modeling, pentesting, SBOM, and PSIRT.",
  keywords: [
    "EU CRA",
    "UN R155",
    "UN R156",
    "ISO 21434",
    "SAE 21434",
    "FDA premarket cybersecurity",
    "product security",
    "TARA",
    "SBOM",
    "PSIRT",
  ],
  openGraph: {
    title: "0xtyson — Product Security & Regulatory Compliance",
    description:
      "Embedded and connected-product cybersecurity aligned to EU CRA, UN R155/R156, FDA premarket, and ISO/SAE 21434.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark" as const,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${plexMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

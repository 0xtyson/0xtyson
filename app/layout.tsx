import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const SITE_URL = "https://productcybersecurity.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Product Cybersecurity | IoT, Medical Device & Automotive Security Experts",
  description:
    "Leading cybersecurity compliance consultancy specializing in EU Cyber Resilience Act (CRA), FDA medical device cybersecurity, UN R155 automotive homologation, and ISO 21434 standards. Expert IoT product security consulting.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EU CRA, FDA & Automotive Cybersecurity Compliance Experts",
    description:
      "Leading cybersecurity compliance consultancy specializing in EU Cyber Resilience Act (CRA), FDA medical device cybersecurity, UN R155 automotive homologation, and ISO 21434 standards.",
    url: SITE_URL,
    siteName: "The Product Cybersecurity Group",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Product Cybersecurity Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EU CRA, FDA & Automotive Cybersecurity Compliance Experts",
    description:
      "EU Cyber Resilience Act, FDA medical device cybersecurity, UN R155 homologation, and ISO 21434 compliance consulting.",
    images: ["/og-image.png"],
  },
}

export const viewport = {
  themeColor: "#08080a",
  colorScheme: "dark" as const,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "The Product Cybersecurity Group LLC",
      url: SITE_URL,
      email: "info@productcybersecurity.com",
      description:
        "Compliance consultancy for connected-product security: EU Cyber Resilience Act, FDA medical device premarket cybersecurity, UN R155/R156, and ISO/SAE 21434.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "The Product Cybersecurity Group LLC",
      url: SITE_URL,
      email: "info@productcybersecurity.com",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      serviceType: [
        "EU Cyber Resilience Act compliance",
        "FDA medical device premarket cybersecurity",
        "UN R155 / R156 automotive homologation",
        "ISO/SAE 21434 road vehicle cybersecurity",
        "Firmware security analysis",
        "Penetration testing",
      ],
    },
  ],
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
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

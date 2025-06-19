import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nuvate Technology - Leading ERP & Software Solutions Provider in India",
    template: "%s | Nuvate Technology",
  },
  description:
    "Transform your business with Nuvate's innovative ERP solutions. Specializing in StitchIT (garment manufacturing), WashIT (laundry management), DigitAil (e-commerce), and HR TECH. Trusted by 500+ businesses across India.",
  keywords: [
    "ERP software India",
    "garment manufacturing software",
    "laundry management system",
    "e-commerce solution",
    "HR management software",
    "StitchIT",
    "WashIT",
    "DigitAil",
    "HR TECH",
    "business automation",
    "inventory management",
    "production planning",
    "Ahmedabad software company",
    "textile ERP",
    "industrial laundry software",
  ],
  authors: [{ name: "Nuvate Technology Pvt Ltd" }],
  creator: "Nuvate Technology Pvt Ltd",
  publisher: "Nuvate Technology Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nuvatetechnology.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nuvatetechnology.com",
    title: "Nuvate Technology - Leading ERP & Software Solutions Provider in India",
    description:
      "Transform your business with Nuvatech's innovative ERP solutions. Specializing in garment manufacturing, laundry management, e-commerce, and HR solutions.",
    siteName: "Nuvate Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nuvate Technology - ERP Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvate Technology - Leading ERP & Software Solutions Provider",
    description:
      "Transform your business with innovative ERP solutions for garment manufacturing, laundry management, e-commerce, and HR.",
    images: ["/twitter-image.jpg"],
    creator: "@nuvate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuvate Technology Pvt Ltd",
  alternateName: "Nuvate",
  url: "https://nuvatetechnology.com",
  logo: "https://nuvatetechnology.com/logo.png",
  description:
    "Leading ERP and software solutions provider specializing in garment manufacturing, laundry management, e-commerce, and HR solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-901, Empire Business Hub, Science City Road",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380060",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-76007-67857",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  foundingDate: "2014",
  numberOfEmployees: "50-100",
  industry: "Software Development",
  sameAs: [
    "https://www.linkedin.com/company/nuvatech-technology",
    "https://twitter.com/nuvatech",
    "https://www.facebook.com/nuvatech",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ERP Software Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "StitchIT",
          description: "Complete garment manufacturing ERP solution",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "WashIT",
          description: "Industrial laundry management system",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "DigitAil",
          description: "Complete e-commerce solution",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "HR TECH",
          description: "Advanced HR management system",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://nuvatetechnology.com" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

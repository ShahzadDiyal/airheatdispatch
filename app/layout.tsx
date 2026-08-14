import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import { Phone, Calendar } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "HVAC Service and Repair | 24/7 Emergency AC & Heating Experts",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Fast, reliable HVAC Service and Repair by state-licensed technicians. 24/7 emergency air conditioning repair, furnace maintenance, and flat-rate pricing. Call (555) 839-4328.",
  keywords: [
    "HVAC Service and Repair",
    "Emergency AC Repair",
    "Furnace Repair Near Me",
    "Heating System Maintenance",
    "HVAC Contractor",
    "Seasonal HVAC Tune-Up",
    "24/7 Air Conditioning Repair",
    "Indoor Air Quality",
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    title: "HVAC Service and Repair | 24/7 Emergency AC & Heating Experts",
    description:
      "Fast, reliable HVAC Service and Repair by state-licensed technicians. 24/7 emergency air conditioning repair, furnace maintenance, and flat-rate pricing.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AirHeat Dispatch - HVAC Service and Repair Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Service and Repair | 24/7 Emergency AC & Heating",
    description:
      "Fast, reliable HVAC Service and Repair by state-licensed technicians. 24/7 emergency air conditioning repair.",
    images: [`${SITE_CONFIG.domain}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema for LocalBusiness / HVACBusiness
  const hvacBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_CONFIG.domain}/#hvacbusiness`,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: SITE_CONFIG.priceRange,
    image: `${SITE_CONFIG.domain}/og-image.jpg`,
    description:
      "Licensed and certified HVAC contractor providing 24/7 emergency air conditioning repair, heating and furnace diagnostics, seasonal maintenance, and indoor air quality services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_CONFIG.rating.ratingValue,
      reviewCount: SITE_CONFIG.rating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services Catalog",
      itemListElement: CORE_SERVICES.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
          url: `${SITE_CONFIG.domain}/services/${s.slug}`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: s.startingPrice,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacBusinessSchema) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Mobile Sticky Quick Action Call Bar (Conversion Booster) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="flex-1 py-3 px-3 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 active:scale-95"
          >
            <Phone className="w-4 h-4 text-sky-400 animate-bounce" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
          <a
            href="#hero-booking"
            rel="dofollow"
            className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20 active:scale-95 text-center"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Online</span>
          </a>
        </div>
      </body>
    </html>
  );
}

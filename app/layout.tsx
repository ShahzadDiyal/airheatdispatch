import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import { Phone } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Connect With Local HVAC Service Providers | AirHeat Dispatch",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Free homeowner connection service to find independent local HVAC contractors for AC repair, furnace repair, heating service, and HVAC maintenance. Call (555) 839-4328.",
  keywords: [
    "Connect With Local HVAC Provider",
    "Find HVAC Repair Near Me",
    "Independent HVAC Contractors",
    "Air Conditioning Repair Connection",
    "Furnace Repair Service",
    "Heating Service Providers",
    "HVAC Maintenance Help",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
    title: "Connect With Local HVAC Service Providers | AirHeat Dispatch",
    description:
      "Free homeowner connection service to find independent local HVAC contractors for AC repair, furnace repair, heating service, and HVAC maintenance.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AirHeat Dispatch - Connect With Independent HVAC Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect With Local HVAC Service Providers | AirHeat Dispatch",
    description:
      "Free homeowner connection service to find independent local HVAC contractors for AC repair, furnace repair, and heating service.",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.domain}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    description:
      "Free service to assist homeowners in connecting with independent local HVAC service contractors.",
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Homeowner Connection Services",
      itemListElement: CORE_SERVICES.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
          url: `${SITE_CONFIG.domain}/${s.slug}`,
        },
        position: index + 1,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.domain}/#website`,
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
  };

  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white min-h-screen flex flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />

        {/* Mobile Sticky Call Bar (Bright Orange CTA) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center justify-between gap-2 shadow-ms">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            aria-label={`Call now to connect with a local HVAC provider at ${SITE_CONFIG.phone}`}
            className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <Phone className="w-4 h-4 fill-white animate-bounce" />
            <span>Call Now ({SITE_CONFIG.phone})</span>
          </a>
        </div>
      </body>
    </html>
  );
}

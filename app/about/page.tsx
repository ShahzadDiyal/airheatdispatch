import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { Building2, CheckCircle2, Phone, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "About AirHeat Dispatch | Homeowner Connection Service",
  description:
    "Learn about AirHeat Dispatch, a free homeowner service connecting homeowners with independent local HVAC contractors nationwide.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_CONFIG.domain}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              <span>Service Profile</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              About AirHeat Dispatch
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Founded to help homeowners quickly find and connect with independent local HVAC contractors when experiencing heating or cooling trouble.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What is AirHeat Dispatch?"
            directAnswer="AirHeat Dispatch is a free homeowner connection service. We assist homeowners in finding independent local HVAC service contractors for air conditioning repair, furnace troubleshooting, heating service, and maintenance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 my-10 sm:my-14">
            <div className="bg-white  rounded-2xl p-5 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Our Purpose & Service Model
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When heating or air conditioning systems break down, homeowners need a fast, hassle-free way to reach independent service providers in their local area. Our 24/7 connection line routes your calls directly to local HVAC contractors.
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "Free Connection Service for Homeowners",
                  "Independent Local HVAC Service Providers",
                  "24/7 Phone Assistance Nationwide",
                  "Assistance for AC, Furnace & Heat Pump Issues",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white  rounded-2xl p-5 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 flex-wrap">
                  <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0" />
                  Independent Service Platform
                </h2>
                <div className="text-sm text-slate-600 mt-3 space-y-2 leading-relaxed">
                  <p>
                    AirHeat Dispatch does not perform HVAC work, does not hold contractor licenses, and does not employ service technicians.
                  </p>
                  <p>
                    All contractors connected through this site are independent third-party service providers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100  text-xs text-slate-700 space-y-2">
                <span className="font-bold text-slate-900 block">24/7 Connection Hotline:</span>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mandated Disclaimer */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white  text-xs text-slate-500 leading-relaxed my-10 sm:my-12 shadow-sm">
            <strong className="text-slate-900 block mb-1">Required Homeowner Disclaimer:</strong>
            {SITE_CONFIG.disclaimer}
          </div>
        </div>
      </div>
    </>
  );
}

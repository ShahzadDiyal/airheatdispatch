import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { Building2, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About AirHeat Dispatch | Local HVAC Service Specialists",
  description:
    "Learn about AirHeat Dispatch LLC, Austin's premier 24/7 HVAC Service and Repair company. State licensed & insured, EPA universal certified, and dedicated to transparent local service.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${SITE_CONFIG.domain}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Local Company Profile</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              About AirHeat Dispatch HVAC Specialists
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Founded on the principle that local homeowners deserve fast,
              transparent, and certified climate control solutions without
              surprise diagnostic fees or high-pressure upselling.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="Who is AirHeat Dispatch LLC?"
            directAnswer="AirHeat Dispatch LLC is a certified local HVAC contractor specializing in 24/7 emergency air conditioning repair, gas and electric furnace diagnostics, heat pump maintenance, mini-splits, and indoor air quality services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Our Mission & Standards
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe that heating and cooling emergencies should be met
                with immediate action, clear flat-rate pricing, and certified
                workmanship. Our technicians carry universal EPA licenses and
                undergo rigorous background checks to ensure your home is safe
                and comfortable.
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "100% Upfront Price Quotes Before Work Starts",
                  "Fully State Licensed & Insured",
                  "Universal EPA 608 Refrigerant Certification",
                  "Continuous Factory Training on Inverter Units",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Corporate Headquarters
                </h2>
                <div className="text-sm text-slate-300 mt-2 space-y-1">
                  <p className="font-semibold text-white">
                    {SITE_CONFIG.legalName}
                  </p>
                  <p>{SITE_CONFIG.address.street}</p>
                  <p>
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{" "}
                    {SITE_CONFIG.address.zip}
                  </p>
                  <p className="text-amber-400 font-bold pt-2">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
                <span className="font-bold text-white block">
                  24/7 Dispatch Hotline:
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

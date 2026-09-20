import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import ZipChecker from "@/components/locations/ZipChecker";
import { Phone, CheckCircle2, UserCheck, ShieldAlert, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | AirHeat Dispatch Homeowner Connection Service",
  description:
    "Learn how AirHeat Dispatch helps homeowners connect with independent local HVAC contractors for fast air conditioning and heating service.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/how-it-works`,
  },
};

export default function HowItWorksPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "How It Works", item: `${SITE_CONFIG.domain}/how-it-works` },
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
            <span className="text-slate-900 font-semibold">How It Works</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Simple 3-Step Process</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              How AirHeat Dispatch Works
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              AirHeat Dispatch is a free service that assists homeowners in connecting with independent local HVAC contractors for fast heating and air conditioning help.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What is the process to connect with a local HVAC provider?"
            directAnswer="Homeowners call (555) 839-4328 to request connection assistance. Our system matches your call with an independent local HVAC contractor servicing your zip code who evaluates your equipment and provides repair services directly to you."
          />

          {/* 3 Step Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 my-10 sm:my-14">
            {[
              { num: "01", title: "Call the Hotline", desc: "Call (555) 839-4328 anytime 24/7. Speak with a customer representative ready to help match your heating or cooling issue." },
              { num: "02", title: "Connect With Local Provider", desc: "You will be connected directly with an independent local HVAC contractor who operates in your city or zip code." },
              { num: "03", title: "Schedule Diagnostics & Repair", desc: "Discuss system symptoms directly with your hired contractor and schedule an in-home evaluation." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-white  rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                  {num}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Key Principles */}
          <div className="bg-white  rounded-2xl p-6 sm:p-8 my-10 sm:my-12 space-y-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Homeowners Should Know
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {[
                { title: "Free Service to Homeowners", desc: "Our connection service is 100% free for homeowners to use." },
                { title: "Independent Contractors", desc: "All contractors are independent businesses operating separately from AirHeat Dispatch." },
                { title: "Licensing & Insurance Verification", desc: "Homeowners are responsible for verifying that the hired contractor furnishes necessary state license and insurance credentials." },
                { title: "24/7 Availability", desc: "Phone matching is available 24 hours a day, 7 days a week, 365 days a year." },
              ].map(({ title, desc }, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ZipChecker />

          {/* CTA Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-12 text-center space-y-4 my-10 sm:my-14 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Need HVAC Assistance Right Now?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Call our hotline to connect with an independent HVAC provider in your area.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>Call Now: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

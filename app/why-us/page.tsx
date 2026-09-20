import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import BrandTrustGrid from "@/components/BrandTrustGrid";
import TrustGuarantees from "@/components/TrustGuarantees";
import ZipChecker from "@/components/ZipChecker";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { Phone, Clock, UserCheck, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Use Our Service | AirHeat Dispatch HVAC Connection",
  description:
    "Discover why homeowners use AirHeat Dispatch to connect with independent local HVAC contractors for 24/7 air conditioning and heating help.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/why-us`,
  },
};

export default function WhyUsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Why Choose Us", item: `${SITE_CONFIG.domain}/why-us` },
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
            <span className="text-slate-900 font-semibold">Why Choose Us</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Fast & Free Homeowner Connection</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Why Homeowners Use AirHeat Dispatch
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We make finding local HVAC help simple. Connect with independent local HVAC service contractors whenever your air conditioner or heating system needs attention.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What Are the Benefits of Using AirHeat Dispatch?"
            directAnswer="AirHeat Dispatch provides a free, convenient phone connection service that links homeowners directly with independent local HVAC service contractors 24 hours a day, 7 days a week."
          />

          <TrustGuarantees />

          <ZipChecker />

          <BrandTrustGrid />

          {/* Service Feature Grid */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 lg:p-12 my-10 sm:my-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 shadow-sm">
            {[
              {
                icon: UserCheck,
                title: "Independent Local Contractors",
                desc: "Connect with local HVAC providers who understand your area's climate requirements.",
                color: "text-blue-600",
              },
              {
                icon: Clock,
                title: "24/7 Phone Assistance",
                desc: `Call our connection desk anytime at ${SITE_CONFIG.phone} to request HVAC provider matching.`,
                color: "text-blue-600",
              },
              {
                icon: ShieldAlert,
                title: "Free for Homeowners",
                desc: "Our matching service is completely free to use for homeowners needing HVAC assistance.",
                color: "text-emerald-600",
              },
            ].map(({ icon: Icon, title, desc, color }, idx) => (
              <div key={idx} className="space-y-3 text-center sm:text-left">
                <Icon className={`w-8 h-8 ${color} mx-auto sm:mx-0`} />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">{title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center space-y-4 my-10 sm:my-14 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Ready to Connect With a Provider?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Our 24/7 hotline is ready to match your heating or cooling issue with local service contractors.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>Call Connection Hotline: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

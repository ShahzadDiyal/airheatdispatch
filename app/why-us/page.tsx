import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import BrandTrustGrid from "@/components/BrandTrustGrid";
import TrustGuarantees from "@/components/TrustGuarantees";
import ZipChecker from "@/components/ZipChecker";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { ShieldCheck, Phone, CheckCircle2, Award, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | Certified & Licensed HVAC Contractors",
  description:
    "Discover why thousands of Austin homeowners choose AirHeat Dispatch for 24/7 HVAC Service and Repair. Upfront flat-rate pricing, 60-min emergency response, and certified technicians.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/why-us`,
  },
};

export default function WhyUsPage() {
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
        name: "Why Choose Us",
        item: `${SITE_CONFIG.domain}/why-us`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-950 min-h-screen py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-sky-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Why Choose Us</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed Authority & Trust</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why Austin Homeowners Trust AirHeat Dispatch
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Built on transparency, rapid response, and certified technical excellence. Discover why over 15,000 local homeowners rely on us for their heating and cooling needs.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What Makes AirHeat Dispatch Different From Other HVAC Contractors?"
            directAnswer="AirHeat Dispatch guarantees 60-minute emergency dispatch, 100% upfront flat-rate pricing with zero hidden surcharges, EPA 608 Universal certified technicians, and a full 1-year parts and labor warranty on all repairs."
          />

          <TrustGuarantees />

          <ZipChecker />

          <BrandTrustGrid />

          {/* Licensing & Credentials Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 my-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <Award className="w-8 h-8 text-amber-400 mx-auto sm:mx-0" />
              <h3 className="text-lg font-bold text-white">State Licensed & Insured</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Registered under Texas State HVAC License #{SITE_CONFIG.licenseNumber} with $2,000,000 general liability coverage.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <Clock className="w-8 h-8 text-sky-400 mx-auto sm:mx-0" />
              <h3 className="text-lg font-bold text-white">24/7/365 Emergency Hotline</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live dispatch managers available around the clock—never an automated call center machine.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <Star className="w-8 h-8 text-emerald-400 mx-auto sm:mx-0" />
              <h3 className="text-lg font-bold text-white">4.9★ Average Rating</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verified reviews from over 684 local homeowners on Google, Yelp, and Angi.
              </p>
            </div>
          </div>

          <div className="text-center pt-6">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-bold text-sm shadow-xl shadow-sky-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Dispatch: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

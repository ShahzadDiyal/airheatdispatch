import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import ZipChecker from "@/components/ZipChecker";
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "How It Works",
        item: `${SITE_CONFIG.domain}/how-it-works`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-50 min-h-screen py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-slate-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">How It Works</span>
          </nav>

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Simple 3-Step Process</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              How AirHeat Dispatch Works
            </h1>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              AirHeat Dispatch is a free service that assists homeowners in connecting with independent local HVAC contractors for fast heating and air conditioning help.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What is the process to connect with a local HVAC provider?"
            directAnswer="Homeowners call (555) 839-4328 to request connection assistance. Our system matches your call with an independent local HVAC contractor servicing your zip code who evaluates your equipment and provides repair services directly to you."
          />

          {/* 3 Step Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-14">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm relative hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold uppercase tracking-wider">
                01
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Call the Hotline
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Call (555) 839-4328 anytime 24/7. Speak with a customer representative ready to help match your heating or cooling issue.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm relative hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold uppercase tracking-wider">
                02
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Connect With Local Provider
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You will be connected directly with an independent local HVAC contractor who operates in your city or zip code.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm relative hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold uppercase tracking-wider">
                03
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Schedule Diagnostics & Repair
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discuss system symptoms directly with your hired contractor and schedule an in-home evaluation.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 my-12 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              What Homeowners Should Know
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Free Service to Homeowners</strong>
                  Our connection service is 100% free for homeowners to use.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Independent Contractors</strong>
                  All contractors are independent businesses operating separately from AirHeat Dispatch.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Licensing & Insurance Verification</strong>
                  Homeowners are responsible for verifying that the hired contractor furnishes necessary state license and insurance credentials.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">24/7 Availability</strong>
                  Phone matching is available 24 hours a day, 7 days a week, 365 days a year.
                </div>
              </div>
            </div>
          </div>

          <ZipChecker />

          {/* CTA Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 my-14 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Need HVAC Assistance Right Now?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Call our hotline to connect with an independent HVAC provider in your area.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

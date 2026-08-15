import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Wrench,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comprehensive HVAC Services Catalog & Quote Directory",
  description:
    "Explore our complete range of 11 certified HVAC Service and Repair offerings including emergency AC repair, furnace troubleshooting, heat pumps, mini-splits, and commercial RTUs.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/services`,
  },
};

export default function ServicesPage() {
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
        name: "Services",
        item: `${SITE_CONFIG.domain}/services`,
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
          {/* Breadcrumb Navigation */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Services Catalog</span>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>
                Full Service Directory ({CORE_SERVICES.length} Solutions)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              HVAC Service and Repair Solutions
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Explore our complete range of certified residential and commercial
              HVAC services. All work includes flat-rate transparent quotes,
              100% satisfaction guarantees, and same-day dispatch options.
            </p>
          </div>

          {/* Direct Answer Summary Block */}
          <DirectAnswerCard
            questionTitle="Overview of Professional HVAC Service Offerings"
            directAnswer="Our certified HVAC service directory includes 24/7 emergency AC diagnostics, gas and electric furnace repairs, seasonal energy-efficiency tune-ups, heat pump inverter servicing, mini-split ductless installations, commercial RTU maintenance, and whole-home air quality purifications."
          />

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-3 md:p-8 space-y-6 hover:border-amber-400/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold border border-amber-400/20">
                      {s.priceLabel}
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      100% Warranted
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    <Link
                      href={`/services/${s.slug}`}
                      rel="dofollow"
                      className="hover:text-amber-400 transition-colors"
                    >
                      {s.name}
                    </Link>
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {s.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Key Features:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.features.slice(0, 4).map((feat, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                  <Link
                    href={`/services/${s.slug}`}
                    rel="dofollow"
                    aria-label={`Read full guide and request free quote for ${s.name}`}
                    className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Read Guide & Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    rel="dofollow"
                    aria-label={`Call hotline for ${s.name} at ${SITE_CONFIG.phone}`}
                    className="text-xs font-bold text-slate-300 hover:text-amber-400 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs section */}
          <div className="pt-10">
            <FaqAccordion faqs={CORE_SERVICES.flatMap((s) => s.faqs)} />
          </div>
        </div>
      </div>
    </>
  );
}

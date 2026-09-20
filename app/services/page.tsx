import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import { Wrench, ArrowRight, CheckCircle2, Phone, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Services Directory | AirHeat Dispatch",
  description:
    "Explore our directory of 9 HVAC service categories including AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC installation, and maintenance.",
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
        name: "Services Directory",
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
            <span className="text-white font-semibold">Services Directory</span>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Full Service Directory ({CORE_SERVICES.length} Categories)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              HVAC Services Directory
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Explore our core HVAC service categories. AirHeat Dispatch helps connect homeowners with independent local contractors for heating, cooling, and equipment care.
            </p>
          </div>

          {/* Direct Answer Summary Block */}
          <DirectAnswerCard
            questionTitle="Overview of HVAC Services Available Through AirHeat Dispatch"
            directAnswer="Our homeowner connection directory includes 9 primary HVAC service categories: HVAC Repair, AC Repair, Furnace Repair, Furnace Cleaning, Furnace Replacement, HVAC Installation, HVAC Maintenance, Heating Repair, and Heat Pump Repair."
          />

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-amber-400/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 text-xs font-bold border border-sky-500/20">
                      Homeowner Connection Service
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      Independent Local Providers
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    <Link
                      href={`/${s.slug}`}
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
                      Key Highlights:
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
                    href={`/${s.slug}`}
                    rel="dofollow"
                    aria-label={`Read guide for ${s.name}`}
                    className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>View Service Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    rel="dofollow"
                    aria-label={`Call hotline for ${s.name} at ${SITE_CONFIG.phone}`}
                    className="text-xs font-bold text-slate-300 hover:text-amber-400 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
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

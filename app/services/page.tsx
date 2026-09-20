import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Services Directory", item: `${SITE_CONFIG.domain}/services` },
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Services Directory</span>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5 shrink-0" />
              <span>Full Service Directory ({CORE_SERVICES.length} Categories)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              HVAC Services Directory
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore our core HVAC service categories. AirHeat Dispatch helps connect homeowners with independent local contractors for heating, cooling, and equipment care.
            </p>
          </div>

          {/* Direct Answer */}
          <DirectAnswerCard
            questionTitle="Overview of HVAC Services Available Through AirHeat Dispatch"
            directAnswer="Our homeowner connection directory includes 9 primary HVAC service categories: HVAC Repair, AC Repair, Furnace Repair, Furnace Cleaning, Furnace Replacement, HVAC Installation, HVAC Maintenance, Heating Repair, and Heat Pump Repair."
          />

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 my-10 sm:my-14">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-white  rounded-2xl p-5 sm:p-8 space-y-5 hover:border-blue-300 transition-all shadow-sm hover:shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 shrink-0">
                      Homeowner Connection Service
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium shrink-0">
                      <ShieldAlert className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      Independent Local Providers
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    <Link
                      href={`/${s.slug}`}
                      rel="dofollow"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {s.name}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.shortDesc}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                      {s.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
                  <Link
                    href={`/${s.slug}`}
                    rel="dofollow"
                    aria-label={`Read guide for ${s.name}`}
                    className="px-4 sm:px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-xs shrink-0"
                  >
                    <span>View Service Guide</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>

                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    rel="dofollow"
                    aria-label={`Call hotline for ${s.name}`}
                    className="text-xs font-extrabold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-orange-600 shrink-0" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs section */}
          <div className="pt-4 sm:pt-6">
            <FaqAccordion faqs={CORE_SERVICES.flatMap((s) => s.faqs)} />
          </div>
        </div>
      </div>
    </>
  );
}

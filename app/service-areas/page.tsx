import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, TEXAS_STATE_DATA, TEXAS_CITIES_DATA, CORE_SERVICES } from "@/config/site";
import ZipChecker from "@/components/ZipChecker";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { MapPin, ArrowRight, Phone, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Texas & U.S. HVAC Service Areas Directory | AirHeat Dispatch",
  description:
    "Explore AirHeat Dispatch Texas service areas directory. Connect with independent local HVAC contractors in Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, and nationwide.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/service-areas`,
  },
};

export default function ServiceAreasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/service-areas` },
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
            <span className="text-slate-900 font-semibold">Service Areas</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Texas & U.S. Coverage Directory</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              HVAC Service Area Directory
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              AirHeat Dispatch helps homeowners connect with independent local HVAC contractors across Texas cities and nationwide U.S. service regions.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="Which Texas cities and regions are covered by AirHeat Dispatch?"
            directAnswer="We cover all major Texas metropolitan areas including Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, and Lubbock, as well as nationwide call matching."
          />

          {/* Texas State Hub Card */}
          <div className="my-8 sm:my-12 p-5 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider inline-block">
                Statewide Service Hub
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                Texas Statewide HVAC Connection Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {TEXAS_STATE_DATA.intro}
              </p>
            </div>
            <Link
              href="/hvac/texas"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shrink-0 shadow-md transition-colors whitespace-nowrap"
            >
              <span>Visit Texas Hub</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          {/* Texas Cities Grid */}
          <section className="my-10 sm:my-14 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  Major Texas City Hubs
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  10 primary Texas metropolitan regions with localized climate and service information.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {TEXAS_CITIES_DATA.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{cityData.cityName}, TX</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-medium shrink-0 whitespace-nowrap">
                        Independent Contractors
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cityData.cityName} Local HVAC Hub
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {cityData.intro}
                    </p>

                    <div className="pt-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        Sub-Communities:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cityData.subAreas.slice(0, 4).map((sub, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <Link
                      href={`/hvac/texas/${cityData.citySlug}`}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Explore {cityData.cityName} Hub</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>

                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-500 pt-1">
                      <Link href={`/ac-repair/texas/${cityData.citySlug}`} className="hover:text-blue-600 transition-colors truncate">
                        • AC Repair {cityData.cityName}
                      </Link>
                      <Link href={`/furnace-repair/texas/${cityData.citySlug}`} className="hover:text-blue-600 transition-colors truncate">
                        • Furnace Repair {cityData.cityName}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <ZipChecker />

          {/* Legal Disclaimer */}
          <div className="my-8 sm:my-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong className="text-slate-900 block mb-1">Mandated Legal Disclaimer:</strong>
            {SITE_CONFIG.disclaimer}
          </div>

          {/* Call CTA Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center space-y-4 my-10 sm:my-14 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Don&apos;t See Your Texas City Listed?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Our 24/7 hotline connects callers with independent local HVAC contractors across all Texas zip codes. Call now to check local availability.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>Call Hotline: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import { ALL_STATES_DATA } from "@/config/states";
import { TEXAS_CITIES_DATA, TEXAS_ALL_CITIES } from "@/config/locations/texas";
import { ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES } from "@/config/locations/alabama";
import { ARIZONA_PRESET_CITIES_DATA, ARIZONA_ALL_CITIES } from "@/config/locations/arizona";
import { ARKANSAS_PRESET_CITIES_DATA, ARKANSAS_ALL_CITIES } from "@/config/locations/arkansas";
import ZipChecker from "@/components/locations/ZipChecker";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import { MapPin, ArrowRight, Phone, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Service Areas Directory | AirHeat Dispatch",
  description:
    "Explore AirHeat Dispatch service areas directory covering Texas (945 cities), Alabama (463 cities), Arizona (91 cities), Arkansas (379+ cities), and U.S. service regions. Connect with independent local HVAC contractors.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/service-areas`,
  },
};

export default function ServiceAreasPage() {
  const activeStates = Object.values(ALL_STATES_DATA);

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
              <span>Statewide & Regional Coverage Directory</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              HVAC Service Area Directory
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              AirHeat Dispatch helps homeowners connect with independent local HVAC contractors across all active state directories, major metropolitan areas, and local municipalities nationwide.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="Which states and cities are covered by AirHeat Dispatch?"
            directAnswer={`We cover all major metropolitan regions and local municipalities in ${activeStates.map((s) => s.stateName).join(", ")}, as well as nationwide call matching across U.S. zip codes.`}
          />

          {/* NATIONWIDE 50 STATES DIRECTORY GRID */}
          <section className="my-8 sm:my-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                Nationwide 50-State HVAC Service Directory
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              AirHeat Dispatch provides nationwide HVAC service referral coverage across all 50 U.S. states. Select any state to view local city hubs, climate details, and independent contractor connection info:
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 pt-2">
              {activeStates.map((st) => (
                <Link
                  key={st.stateSlug}
                  href={`/hvac/${st.stateSlug}`}
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors flex items-center justify-between gap-1 shadow-2xs"
                >
                  <span className="truncate">{st.stateName}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* ARIZONA CITY HUBS */}
          <section className="my-10 sm:my-14 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  ARIZONA COVERAGE DIRECTORY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  Major Arizona City Hubs
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Connecting homeowners with independent contractors across all 91 Arizona cities and municipalities.
                </p>
              </div>
              <Link
                href="/hvac/arizona"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
              >
                <span>View Full Arizona Directory →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ARIZONA_PRESET_CITIES_DATA.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-orange-300 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-orange-700 flex items-center gap-1 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="truncate">{cityData.cityName}, AZ</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-orange-800 font-medium shrink-0 whitespace-nowrap">
                        Independent Contractors
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
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
                      href={`/hvac/arizona/${cityData.citySlug}`}
                      className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Explore {cityData.cityName} Hub</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>

                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-500 pt-1">
                      <Link href={`/ac-repair/arizona/${cityData.citySlug}`} className="hover:text-orange-700 transition-colors truncate">
                        • AC Repair {cityData.cityName}
                      </Link>
                      <Link href={`/furnace-repair/arizona/${cityData.citySlug}`} className="hover:text-orange-700 transition-colors truncate">
                        • Furnace Repair {cityData.cityName}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ALL 91 ARIZONA CITIES DIRECTORY */}
          <section className="my-10 sm:my-14 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-orange-600 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                All 91 Arizona Cities & Towns Directory
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              AirHeat Dispatch provides phone connection coverage across all 91 incorporated cities and towns in Arizona. Select any city to connect with independent local HVAC contractors:
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 pt-2 max-h-96 overflow-y-auto pr-1">
              {ARIZONA_ALL_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/hvac/arizona/${city.slug}`}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-800 hover:border-orange-300 transition-colors truncate"
                >
                  {city.name}, AZ
                </Link>
              ))}
            </div>
          </section>

          {/* ALABAMA CITY HUBS */}
          <section className="my-10 sm:my-14 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  ALABAMA COVERAGE DIRECTORY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  Major Alabama City Hubs
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Connecting homeowners with independent contractors across all 463 Alabama cities and municipalities.
                </p>
              </div>
              <Link
                href="/hvac/alabama"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
              >
                <span>View Full Alabama Directory →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ALABAMA_PRESET_CITIES_DATA.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{cityData.cityName}, AL</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium shrink-0 whitespace-nowrap">
                        Independent Contractors
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
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
                      href={`/hvac/alabama/${cityData.citySlug}`}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Explore {cityData.cityName} Hub</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>

                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-500 pt-1">
                      <Link href={`/ac-repair/alabama/${cityData.citySlug}`} className="hover:text-emerald-700 transition-colors truncate">
                        • AC Repair {cityData.cityName}
                      </Link>
                      <Link href={`/furnace-repair/alabama/${cityData.citySlug}`} className="hover:text-emerald-700 transition-colors truncate">
                        • Furnace Repair {cityData.cityName}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ALL 463 ALABAMA CITIES QUICK LINK DIRECTORY */}
          <section className="my-10 sm:my-14 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                All 463 Alabama Cities & Towns Directory
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              AirHeat Dispatch provides phone connection coverage across all 463 incorporated cities and municipalities in Alabama. Select any city to connect with independent local HVAC contractors:
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 pt-2 max-h-96 overflow-y-auto pr-1">
              {ALABAMA_ALL_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/hvac/alabama/${city.slug}`}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-colors truncate"
                >
                  {city.name}, AL
                </Link>
              ))}
            </div>
          </section>

          {/* TEXAS CITY HUBS */}
          <section className="my-10 sm:my-14 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  TEXAS COVERAGE DIRECTORY
                </span>
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

          {/* ALL 945 TEXAS CITIES QUICK LINK DIRECTORY */}
          <section className="my-10 sm:my-14 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                All 945 Texas Cities & Towns Directory
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              AirHeat Dispatch provides phone connection coverage across all 945 incorporated cities and municipalities in Texas. Select any city to connect with independent local HVAC contractors:
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 pt-2 max-h-96 overflow-y-auto pr-1">
              {TEXAS_ALL_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/hvac/texas/${city.slug}`}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 transition-colors truncate"
                >
                  {city.name}, TX
                </Link>
              ))}
            </div>
          </section>

          {/* ARKANSAS CITY HUBS */}
          <section className="my-10 sm:my-14 space-y-6 sm:space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  ARKANSAS COVERAGE DIRECTORY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                  Arkansas City Hubs
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Primary Arkansas metropolitan regions with localized climate and service information.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ARKANSAS_PRESET_CITIES_DATA.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-red-300 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-red-600 flex items-center gap-1 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="truncate">{cityData.cityName}, AR</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-medium shrink-0 whitespace-nowrap">
                        Independent Contractors
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
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
                      href={`/hvac/arkansas/${cityData.citySlug}`}
                      className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Explore {cityData.cityName} Hub</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>

                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-500 pt-1">
                      <Link href={`/ac-repair/arkansas/${cityData.citySlug}`} className="hover:text-red-600 transition-colors truncate">
                        • AC Repair {cityData.cityName}
                      </Link>
                      <Link href={`/furnace-repair/arkansas/${cityData.citySlug}`} className="hover:text-red-600 transition-colors truncate">
                        • Furnace Repair {cityData.cityName}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ALL ARKANSAS CITIES QUICK LINK DIRECTORY */}
          <section className="my-10 sm:my-14 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-red-600 shrink-0" />
              <h2 className="text-xl font-bold text-slate-900">
                All Arkansas Cities & Towns Directory
              </h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              AirHeat Dispatch provides phone connection coverage across all incorporated cities and municipalities in Arkansas. Select any city to connect with independent local HVAC contractors:
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 pt-2 max-h-96 overflow-y-auto pr-1">
              {ARKANSAS_ALL_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/hvac/arkansas/${city.slug}`}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-red-50 hover:text-red-800 hover:border-red-300 transition-colors truncate"
                >
                  {city.name}, AR
                </Link>
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
              Don&apos;t See Your City Listed?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Our 24/7 hotline connects callers with independent local HVAC contractors across all U.S. zip codes. Call now to check local availability.
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

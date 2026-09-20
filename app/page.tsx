import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, GENERAL_FAQS, TEXAS_CITIES_DATA } from "@/config/site";
import FaqAccordion from "@/components/FaqAccordion";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import BrandTrustGrid from "@/components/BrandTrustGrid";
import ZipChecker from "@/components/ZipChecker";
import TrustGuarantees from "@/components/TrustGuarantees";
import ServiceEstimator from "@/components/ServiceEstimator";
import {
  Phone,
  Clock,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Flame,
  Snowflake,
  Wind,
  ShieldAlert,
  MapPin,
  UserCheck,
  Check,
  FileText,
} from "lucide-react";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GENERAL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION (Matches Image 1 Mockup) */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs text-xs font-bold text-blue-600">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  24/7 Homeowner Connection Desk
                </span>
                <span className="text-slate-300">|</span>
                <span>Fast Local Provider Matching</span>
              </div>

              {/* H1 Tag */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Connect With Local <br />
                <span className="text-blue-600">HVAC Service Providers</span>
              </h1>

              {/* Value Proposition */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                AirHeat Dispatch is a free homeowner service that connects you with independent local HVAC contractors for emergency air conditioning repair, furnace troubleshooting, heating service, and system tune-ups.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call now to connect with a local HVAC provider at ${SITE_CONFIG.phone}`}
                  className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95 group"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call Now ({SITE_CONFIG.phone})</span>
                </a>

                <Link
                  href="/services"
                  rel="dofollow"
                  className="px-6 sm:px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-blue-600 border border-blue-200 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xs"
                >
                  <span>Find HVAC Service</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </Link>
              </div>

              {/* Trust Pills */}
              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Speak With a Local Provider</span>
                </a>
              </div>

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Fast homeowner connection service to find independent local HVAC contractors across the United States.</span>
              </p>
            </div>

            {/* Right Column: Hero Technician Image Card (Matches Image 1 Mockup) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden group">
                <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                    alt="HVAC Technician Diagnosing Furnace and Air Conditioning System"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Dark Glass Overlay Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-orange-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        24/7 Hotline Active
                      </span>
                      <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] uppercase font-bold">
                        Nationwide
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      Emergency Response & Local Dispatch
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Connecting homeowners directly with independent local HVAC contractors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 TRUST BADGES GRID (Matches Image 1 Mockup) */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustGuarantees />
        </div>
      </section>

      {/* AEO / DIRECT ANSWER SECTION */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className=" mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200 inline-block mb-2">
              HOMEOWNER SERVICE OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How Does AirHeat Dispatch Help Homeowners?
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Connecting homeowners with independent local heating and cooling service contractors.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="What is AirHeat Dispatch and how does it connect homeowners with local HVAC providers?"
            directAnswer="AirHeat Dispatch is a free homeowner connection platform that matches homeowners facing heating or cooling problems with independent local HVAC contractors. By calling (555) 839-4328, homeowners are routed to independent service providers who diagnose and resolve system issues."
            keyPoints={[
              "Free phone connection service for homeowners",
              "Matches callers with independent local HVAC contractors",
              "Covers AC repair, furnace repair, heating, and HVAC maintenance",
              "24/7 hotline coverage across U.S. service regions",
            ]}
          />
        </div>
      </section>

      {/* CORE ACCEPTED HVAC SERVICES GRID (Matches Image 1 & 4 Mockup) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                RESPONSIVE REPAIR COVERAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Core Accepted HVAC Services
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Connecting homeowners with independent local service providers for residential heating, cooling, and ventilation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((s, idx) => {
              // Highlight 1 dark card like Image 1
              const isEmergency = s.slug === "hvac" || idx === 7;
              if (isEmergency) {
                return (
                  <div
                    key={s.slug}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase">
                        24/7 Live Dispatch
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        24/7 Emergency HVAC Dispatch
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Sudden cooling or heating failure during weather extremes? Call our hotline for immediate contractor routing.
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300 pt-2">
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-orange-400" />
                          <span>Immediate phone matching</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-orange-400" />
                          <span>Local independent technicians</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/30 transition-all mt-6"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>Call {SITE_CONFIG.phone}</span>
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={s.slug}
                  className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {s.slug.includes("ac") && <Snowflake className="w-5 h-5" />}
                      {(s.slug.includes("furnace") || s.slug.includes("heating")) && (
                        <Flame className="w-5 h-5" />
                      )}
                      {s.slug.includes("maintenance") && <Wrench className="w-5 h-5" />}
                      {![
                        "ac-repair",
                        "furnace-repair",
                        "furnace-cleaning",
                        "furnace-replacement",
                        "heating-repair",
                        "hvac-maintenance",
                      ].includes(s.slug) && <Wind className="w-5 h-5" />}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {s.name}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {s.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <Link
                      href={`/${s.slug}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW AIRHEAT DISPATCH WORKS (Matches Image 1 & 4 Mockup) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center px-3 md:px-6 xl:px-12 mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How AirHeat Dispatch Works
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Connecting homeowners with independent local HVAC contractors in 3 easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Tell Us What You Need
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call our 24/7 hotline to explain whether your air conditioner is blowing warm air, your furnace won't ignite, or you need seasonal maintenance.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold mt-4">
                Call <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-orange-500 font-bold underline">{SITE_CONFIG.phone}</a> to request connection.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Connect With a Local Provider
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We route your call directly to an independent local HVAC contractor servicing your zip code or community.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold mt-4">
                Direct phone matching with independent providers.
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-orange-500/20">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Receive Service Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss equipment symptoms directly with your hired contractor and schedule an in-home evaluation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold mt-4">
                Work performed directly by independent contractor.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PROPERTY OWNERS USE AIRHEAT DISPATCH (Matches Image 1 Mockup) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider inline-block">
                SUCCESSFUL MATCHING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Why Property Owners Use AirHeat Dispatch
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When heating or air conditioning systems fail during extreme weather, homeowners need a fast, reliable way to reach independent service providers in their local area.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2">
                <strong className="text-slate-900 block font-bold">Free Connection Service:</strong>
                Our homeowner connection desk is completely free to use. Call anytime to speak with a representative.
              </div>

              <div>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call ({SITE_CONFIG.phone})</span>
                </a>
              </div>
            </div>

            {/* Right Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Independent Local Contractors
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect directly with independent local HVAC contractors serving your zip code.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  24/7 Phone Connection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Call anytime day or night for fast assistance connecting with a local service provider.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Full HVAC Coverage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assistance for central AC repair, furnace troubleshooting, heat pump issues, and tune-ups.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <ShieldAlert className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Free for Homeowners
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our connection service helps homeowners find local service contractors at no cost to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATIONWIDE SERVICE AREAS & REGIONAL DEMANDS (Matches Image 1 & 4 Mockup) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                NATIONWIDE SERVICE AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Nationwide Service Areas & Regional Demands
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Connecting callers with independent local HVAC contractors across Texas and major U.S. service regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEXAS_CITIES_DATA.slice(0, 6).map((city) => (
              <div
                key={city.citySlug}
                className="bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-2xl p-6 space-y-4 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      {city.cityName}, TX
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold uppercase">
                      Texas Hub
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {city.cityName} HVAC Service
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {city.intro}
                  </p>
                </div>

                <Link
                  href={`/hvac/texas/${city.citySlug}`}
                  className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-blue-600 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <span>View {city.cityName} Service Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Statewide Link Bar */}
          <div className="mt-8 p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 font-medium">
              <strong className="text-blue-700">Looking for more Texas cities?</strong> View our full Texas Statewide HVAC Service Hub covering Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, and more.
            </div>
            <Link
              href="/hvac/texas"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 shadow-xs"
            >
              Visit Texas Statewide Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* COVERAGE CHECKER */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZipChecker />
        </div>
      </section>

      {/* HOMEOWNER DIAGNOSTIC & MAINTENANCE GUIDES (Matches Image 1 Mockup) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                HVAC KNOWLEDGE HUB
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Homeowner Diagnostic & Maintenance Guides
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Learn about key HVAC components, system symptoms, and when to contact an independent provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Signs Your Furnace Needs Immediate Repair",
                desc: "Learn how to spot early igniter failure, dirty flame sensors, and limit switch trips before full cold weather outages.",
                tag: "FURNACE DIAGNOSTICS",
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
                link: "/furnace-repair",
              },
              {
                title: "Why Is My AC Unit Blowing Warm Air?",
                desc: "Understand common causes including blown compressor capacitors, low refrigerant, and frozen indoor evaporator coils.",
                tag: "AC TROUBLESHOOTING",
                image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80",
                link: "/ac-repair",
              },
              {
                title: "Heat Pump vs Furnace: Which Is Right?",
                desc: "Compare dual heating and cooling heat pumps with high-AFUE gas furnaces for seasonal efficiency.",
                tag: "EQUIPMENT SELECTION",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
                link: "/heat-pump-repair",
              },
              {
                title: "How Often to Replace AC Air Filters",
                desc: "Discover how clean air filters prevent coil freezing, protect blower motors, and lower utility bills.",
                tag: "SYSTEM MAINTENANCE",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
                link: "/hvac-maintenance",
              },
            ].map((guide, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-slate-100">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase">
                      {guide.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                  <Link
                    href={guide.link}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND TRUST GRID */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandTrustGrid />
        </div>
      </section>

      {/* FAQ SECTION (Matches Image 1 & 4 Mockup) */}
      <section className="py-16 bg-white border-b border-slate-200" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={GENERAL_FAQS} />
        </div>
      </section>

      {/* BOTTOM CONVERSION CALL CTA BANNER (Matches Image 1, 2, 3, 4, 5 Mockups) */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30 inline-block">
            24/7 HOMEOWNER CONNECTION DESK
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Need HVAC Service Today?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Do not suffer in extreme heat or freezing cold. Our 24/7 hotline connects you directly with independent local HVAC contractors in your area.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call ({SITE_CONFIG.phone})</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base flex items-center justify-center gap-2 border border-slate-200 shadow-md"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>Speak With a Local Provider</span>
            </Link>
          </div>

          <div className="pt-6 px-3 md:px-6 xl:px-12 mx-auto">
            <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

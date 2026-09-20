import Link from "next/link";
import { SITE_CONFIG, GENERAL_FAQS, getSpeakableSchema, getEmergencyServiceSchema } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import { TEXAS_CITIES_DATA } from "@/config/locations/texas";
import FaqAccordion from "@/components/ui/FaqAccordion";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import BrandTrustGrid from "@/components/home/BrandTrustGrid";
import ZipChecker from "@/components/locations/ZipChecker";
import TrustGuarantees from "@/components/home/TrustGuarantees";
import ServiceEstimator from "@/components/services/ServiceEstimator";
import LiveSearchHero from "@/components/locations/LiveSearchHero";
import ClimateAlertBanner from "@/components/home/ClimateAlertBanner";
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

  const speakableSchema = getSpeakableSchema(SITE_CONFIG.domain);
  const emergencySchema = getEmergencyServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-14 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white  shadow-xs text-xs font-bold text-blue-600">
                <span className="flex items-center gap-1.5 text-emerald-600 shrink-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  24/7 Homeowner Connection Desk
                </span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="hidden sm:inline">Fast Local Provider Matching</span>
              </div>

              {/* H1 Tag */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Connect With Local{" "}
                <span className="text-blue-600 block sm:inline">HVAC Service Providers</span>
              </h1>

              {/* Value Proposition */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                AirHeat Dispatch is a free homeowner service that connects you with independent local HVAC contractors for emergency air conditioning repair, furnace troubleshooting, heating service, and system tune-ups.
              </p>

              {/* Hero Live Search Bar */}
              <div className="pt-2">
                <LiveSearchHero />
              </div>

              {/* Trust Pill */}
              <div className="pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Speak With a Local Provider</span>
                </a>
              </div>

              <p className="text-xs text-slate-500 flex items-start gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Fast homeowner connection service to find independent local HVAC contractors across the United States.</span>
              </p>
            </div>

            {/* Right Column: Hero Image Card */}
            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="bg-white p-2 rounded-2xl  shadow-xl relative overflow-hidden group">
                <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                    alt="HVAC Technician Diagnosing Furnace and Air Conditioning System"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-white space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-orange-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        24/7 Hotline Active
                      </span>
                      <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] uppercase font-bold shrink-0">
                        Nationwide
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      Emergency Response & Local Dispatch
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug">
                      Connecting homeowners directly with independent local HVAC contractors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 TRUST BADGES GRID */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustGuarantees />
        </div>
      </section>

      {/* AEO / DIRECT ANSWER SECTION */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClimateAlertBanner />

          <div className="text-center mb-8 px-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider inline-block mb-2">
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

      {/* CORE ACCEPTED HVAC SERVICES GRID */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50  text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                RESPONSIVE REPAIR COVERAGE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Core Accepted HVAC Services
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Connecting homeowners with independent local service providers for residential heating, cooling, and ventilation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CORE_SERVICES.map((s, idx) => {
              const isEmergency = s.slug === "hvac" || idx === 7;
              if (isEmergency) {
                return (
                  <div
                    key={s.slug}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase">
                        24/7 Live Dispatch
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        24/7 Emergency HVAC Dispatch
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Sudden cooling or heating failure during weather extremes? Call our hotline for immediate contractor routing.
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>Immediate phone matching</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>Local independent technicians</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs shadow-orange-500/30 transition-all mt-5"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span className="truncate">Call {SITE_CONFIG.phone}</span>
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={s.slug}
                  className="bg-white  hover:border-blue-400 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-xs group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      {s.slug.includes("ac") && <Snowflake className="w-5 h-5" />}
                      {(s.slug.includes("furnace") || s.slug.includes("heating")) && (
                        <Flame className="w-5 h-5" />
                      )}
                      {s.slug.includes("maintenance") && <Wrench className="w-5 h-5" />}
                      {!["ac-repair","furnace-repair","furnace-cleaning","furnace-replacement","heating-repair","hvac-maintenance"].includes(s.slug) && <Wind className="w-5 h-5" />}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
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
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW AIRHEAT DISPATCH WORKS */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center px-2 sm:px-6 xl:px-12 mb-10 sm:mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-50  text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              How AirHeat Dispatch Works
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Connecting homeowners with independent local HVAC contractors in 3 easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50  rounded-2xl p-6 sm:p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-xs shadow-blue-500/20 shrink-0">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Tell Us What You Need
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Call our 24/7 hotline to explain whether your air conditioner is blowing warm air, your furnace won't ignite, or you need seasonal maintenance.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white  text-xs text-slate-700 font-semibold mt-4">
                Call <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-orange-500 font-bold underline">{SITE_CONFIG.phone}</a> to request connection.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50  rounded-2xl p-6 sm:p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-xs shadow-blue-500/20 shrink-0">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Connect With a Local Provider
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We route your call directly to an independent local HVAC contractor servicing your zip code or community.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white  text-xs text-slate-700 font-semibold mt-4">
                Direct phone matching with independent providers.
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50  rounded-2xl p-6 sm:p-8 space-y-4 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-xs shadow-orange-500/20 shrink-0">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Receive Service Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discuss equipment symptoms directly with your hired contractor and schedule an in-home evaluation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white  text-xs text-slate-700 font-semibold mt-4">
                Work performed directly by independent contractor.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PROPERTY OWNERS USE AIRHEAT DISPATCH */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="px-3 py-1 rounded-full bg-blue-50  text-blue-700 text-xs font-bold uppercase tracking-wider inline-block">
                SUCCESSFUL MATCHING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Why Property Owners Use AirHeat Dispatch
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When heating or air conditioning systems fail during extreme weather, homeowners need a fast, reliable way to reach independent service providers in their local area.
              </p>

              <div className="p-4 rounded-2xl bg-white  text-xs text-slate-700 space-y-1">
                <strong className="text-slate-900 block font-bold">Free Connection Service:</strong>
                Our homeowner connection desk is completely free to use. Call anytime to speak with a representative.
              </div>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span className="truncate">Call ({SITE_CONFIG.phone})</span>
              </a>
            </div>

            {/* Right Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 xs:grid-cols-2 gap-4">
              {[
                { icon: UserCheck, title: "Independent Local Contractors", desc: "Connect directly with independent local HVAC contractors serving your zip code." },
                { icon: Clock, title: "24/7 Phone Connection", desc: "Call anytime day or night for fast assistance connecting with a local service provider." },
                { icon: Wrench, title: "Full HVAC Coverage", desc: "Assistance for central AC repair, furnace troubleshooting, heat pump issues, and tune-ups." },
                { icon: ShieldAlert, title: "Free for Homeowners", desc: "Our connection service helps homeowners find local service contractors at no cost to you." },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white  shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NATIONWIDE & STATEWIDE SERVICE AREAS */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                STATEWIDE & REGIONAL DIRECTORIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Featured Texas & Alabama Service Metros
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Connecting callers with independent local HVAC contractors across Texas, Alabama (all 463 cities), and nationwide service regions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-2xl p-5 sm:p-6 space-y-4 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    Austin, TX
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold uppercase shrink-0">
                    Texas Hub
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Austin Local HVAC Hub
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Connect with independent local HVAC contractors serving Austin and Central Texas heatwave demands.
                </p>
              </div>
              <Link
                href="/hvac/texas/austin"
                className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-blue-600 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <span>View Austin Hub</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 space-y-4 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Birmingham, AL
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase shrink-0">
                    Alabama Hub
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Birmingham Local HVAC Hub
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Connect with independent contractors in Birmingham, Jefferson County, and Central Alabama.
                </p>
              </div>
              <Link
                href="/hvac/alabama/birmingham"
                className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <span>View Birmingham Hub</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 hover:border-emerald-400 rounded-2xl p-5 sm:p-6 space-y-4 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Huntsville, AL
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase shrink-0">
                    Alabama Hub
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Huntsville Local HVAC Hub
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Connect with independent local technicians across the Rocket City and Tennessee Valley region.
                </p>
              </div>
              <Link
                href="/hvac/alabama/huntsville"
                className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <span>View Huntsville Hub</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Dual State Hub Link Bar */}
          <div className="mt-6 sm:mt-8 p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-700 font-medium">
              <strong className="text-blue-700">Explore State Directories:</strong> View full coverage for <Link href="/hvac/texas" className="text-blue-700 font-bold underline">Texas Hub (10 Metros)</Link> or <Link href="/hvac/alabama" className="text-emerald-800 font-bold underline">Alabama Hub (463 Cities)</Link>.
            </div>
            <Link
              href="/service-areas"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 shadow-xs whitespace-nowrap"
            >
              All Service Areas Directory →
            </Link>
          </div>
        </div>
      </section>

      {/* COVERAGE CHECKER */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZipChecker />
        </div>
      </section>

      {/* HOMEOWNER DIAGNOSTIC & MAINTENANCE GUIDES */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50  text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                HVAC KNOWLEDGE HUB
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Homeowner Diagnostic & Maintenance Guides
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              Learn about key HVAC components, system symptoms, and when to contact an independent provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                className="bg-white  hover:border-blue-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-40 sm:h-44 overflow-hidden relative bg-slate-100">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase">
                      {guide.tag}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-slate-100">
                  <Link
                    href={guide.link}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND TRUST GRID */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandTrustGrid />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={GENERAL_FAQS} />
        </div>
      </section>

      {/* BOTTOM CONVERSION CALL CTA BANNER */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30 inline-block">
            24/7 HOMEOWNER CONNECTION DESK
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Need HVAC Service Today?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Do not suffer in extreme heat or freezing cold. Our 24/7 hotline connects you directly with independent local HVAC contractors in your area.
          </p>

          <div className="flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="w-full xs:w-auto sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone className="w-5 h-5 fill-white shrink-0" />
              <span className="truncate">Call ({SITE_CONFIG.phone})</span>
            </a>

            <Link
              href="/contact"
              className="w-full xs:w-auto sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2  shadow-xs whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Speak With a Local Provider</span>
            </Link>
          </div>

          <div className="pt-4 px-2 sm:px-6 xl:px-12">
            <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, GENERAL_FAQS } from "@/config/site";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceEstimator from "@/components/ServiceEstimator";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import BrandTrustGrid from "@/components/BrandTrustGrid";
import ZipChecker from "@/components/ZipChecker";
import TrustGuarantees from "@/components/TrustGuarantees";
import {
  Phone,
  ShieldCheck,
  Star,
  Clock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Flame,
  Snowflake,
  Wind,
  Zap,
} from "lucide-react";

export default function HomePage() {
  // Structured FAQPage JSON-LD schema for search engines & AI engines
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
      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        {/* Glowing Background Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge Bar */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-white font-bold">
                    {SITE_CONFIG.rating.ratingValue}
                  </span>
                  <span className="text-slate-400">
                    ({SITE_CONFIG.rating.reviewCount} Verified Reviews)
                  </span>
                </span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {SITE_CONFIG.licenseText}
                </span>
              </div>

              {/* Single Strictly Enforced H1 Tag */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Fast & Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-amber-400">
                  HVAC Service and Repair
                </span>
              </h1>

              {/* Concise Value Proposition & Direct Answer */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
                Certified local specialists providing 24/7 emergency air
                conditioning repair, furnace diagnostics, and energy-efficient
                system tune-ups. Zero hidden fees, upfront flat-rate quotes, and
                guaranteed same-day dispatch.
              </p>

              {/* Dual Action CTAs with High Contrast & Phone Number */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.02] active:scale-95 group"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call Hotline</span>
                </a>

                <a
                  href="#quick-quote"
                  rel="dofollow"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>

              {/* Trust Signal Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                     Contact to Get Access
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Emergency Dispatch
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                     Assured 
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Parts & Labor
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      All HVAC Brands
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Carrier, Trane, Lennox
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Quick Dispatch Card */}
            <div className="lg:col-span-5" id="hero-booking">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] sm:text-[11px] uppercase tracking-wider rounded-bl-xl rounded-tr-2xl">
                  24/7 Live Dispatch
                </div>

                <div className="mb-6">
                  {/* Sequential Heading Fix: H2 instead of H3 right under H1 */}
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                    Request Emergency HVAC Dispatch
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Fill in your details below for immediate technician
                    call-back within 10 minutes.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  action={`tel:${SITE_CONFIG.phoneRaw}`}
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="hero-service-select"
                      className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block"
                    >
                      Select HVAC Service Required *
                    </label>
                    <select
                      id="hero-service-select"
                      aria-label="Select HVAC Service Required"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                    >
                      {CORE_SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} ({s.priceLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label
                        htmlFor="hero-name-input"
                        className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="hero-name-input"
                        aria-label="Your Full Name"
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="hero-phone-input"
                        className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="hero-phone-input"
                        aria-label="Phone Number"
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="hero-zip-input"
                      className="text-[11px] font-bold text-slate-200 uppercase tracking-wider block"
                    >
                      Zip Code / City *
                    </label>
                    <input
                      id="hero-zip-input"
                      aria-label="Zip Code or City"
                      type="text"
                      placeholder="Austin, TX 78701"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    Dispatch Certified Technician Now  →
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    🔒 Zero obligation. Diagnostic fee waived 100% with any
                    approved repair.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO DIRECT ANSWER SECTION */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What is Professional HVAC Service and Repair?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Understanding core HVAC components, maintenance cycles, and repair
              standards.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="Core Definition & Operational Purpose of HVAC Service and Repair"
            directAnswer="Professional HVAC service and repair involves systemic diagnostic testing, refrigerant pressure calibration, electrical component restoration, combustion safety audits, and mechanical cleaning of heating and cooling systems. Regular service restores system SEER efficiency, prevents catastrophic compressor failure, and ensures safe indoor thermal comfort."
            keyPoints={[
              "Rapid same-day technician dispatch for emergency AC & heating outages",
              "100% waived diagnostic fee when repair work is performed",
              "State-certified technicians trained on Carrier, Trane, Lennox & Rheem",
              "Bi-annual maintenance prevents 85% of sudden seasonal breakdowns",
            ]}
          />
        </div>
      </section>

      {/* LIVE DISPATCH ZIP CHECKER WIDGET */}
      <section className="py-12 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZipChecker />
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Comprehensive HVAC Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Core HVAC Service and Repair Offerings
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Explore our {CORE_SERVICES.length} specialized heating, air
              conditioning, and air quality services engineered for residential
              and commercial systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-slate-950 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                    {s.slug === "ac-repair" && (
                      <Snowflake className="w-6 h-6" />
                    )}
                    {s.slug === "heating-repair" && (
                      <Flame className="w-6 h-6" />
                    )}
                    {s.slug === "hvac-maintenance" && (
                      <Wrench className="w-6 h-6" />
                    )}
                    {s.slug === "emergency-service" && (
                      <Zap className="w-6 h-6 text-amber-400 group-hover:text-slate-950" />
                    )}
                    {s.slug === "indoor-air-quality" && (
                      <Wind className="w-6 h-6" />
                    )}
                    {![
                      "ac-repair",
                      "heating-repair",
                      "hvac-maintenance",
                      "emergency-service",
                      "indoor-air-quality",
                    ].includes(s.slug) && <Wrench className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {s.name}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {s.shortDesc}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-6">
                    <span className="text-slate-400 block font-medium">
                      Pricing Model:
                    </span>
                    <span className="text-amber-400 font-bold text-sm">
                      {s.priceLabel}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {s.features.slice(0, 3).map((feat, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unique Accessible Name on Card Links (Fix Lighthouse Identical Links error) */}
                <Link
                  href={`/services/${s.slug}`}
                  rel="dofollow"
                  aria-label={`View details and request free quote for ${s.name}`}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                >
                  <span>Request Quote & View Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & AUTHORITY SECTION */}
      <section
        className="py-20 bg-slate-950 border-b border-slate-800"
        id="why-us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed & Trusted Experts</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Why Austin Homeowners Trust AirHeat Dispatch
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When your HVAC system breaks down during extreme heat or
                freezing cold, you need a contractor who responds immediately
                with transparent flat-rate pricing and certified expertise.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Upfront Flat-Rate Pricing",
                    desc: "You review and approve the exact repair cost before work begins. No hidden mileage or overtime surcharges.",
                  },
                  {
                    title: "EPA-Certified Technicians",
                    desc: "Our technicians undergo continuous factory training on modern inverter compressors, heat pumps, and gas furnaces.",
                  },
                  {
                    title: "60-Minute Emergency Dispatch",
                    desc: "Fully stocked mobile dispatch units carry original OEM capacitors, fan motors, and control boards for same-day repairs.",
                  },
                  {
                    title: "1-Year Parts & Labor Warranty",
                    desc: "Every repair is backed by our unconditional 100% satisfaction guarantee.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Authority Badge & Stats Box */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative">
              <div className="text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
                  99.4%
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  First-Visit Repair Resolution Rate
                </div>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Our mobile trucks carry over 200 OEM replacement parts to
                  ensure your cooling or heating is fixed on the first visit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800 py-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    15,000+
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    HVAC Repairs Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    &lt; 60 Mins
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Average Response Time
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white text-center sm:text-left">
                    Need Urgent Diagnostics?
                  </div>
                  <div className="text-[11px] text-slate-300 text-center sm:text-left">
                    Technicians available in your area
                  </div>
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call HVAC emergency hotline at ${SITE_CONFIG.phone}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs text-center shadow-md"
                >
                  Call {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          <TrustGuarantees />

          <BrandTrustGrid />
        </div>
      </section>

      {/* INTERACTIVE SERVICE ESTIMATOR SECTION */}
      <section
        className="py-20 bg-slate-900 border-b border-slate-800"
        id="quick-quote"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEstimator />
        </div>
      </section>

      {/* CUSTOMER REVIEWS & SOCIAL PROOF GRID */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Real Reviews from Local Homeowners
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Over 684 verified 5-star reviews across Google, Yelp, and Angi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Thorne",
                location: "Downtown Austin, TX",
                date: "2 days ago",
                service: "Emergency AC Repair",
                review:
                  "Our AC unit stopped blowing cold air on a 102°F afternoon. AirHeat Dispatch arrived within 45 minutes, replaced a blown capacitor, and had icy cold air flowing again. Upfront quote was clear and accurate!",
              },
              {
                name: "Sarah Jenkins",
                location: "Round Rock, TX",
                date: "1 week ago",
                service: "Furnace Ignition Repair",
                review:
                  "Extremely professional technician! He diagnosed our gas furnace flame sensor issue in 15 minutes and performed a full safety check for carbon monoxide. Top-notch service and very clear flat rate.",
              },
              {
                name: "David Chen",
                location: "Cedar Park, TX",
                date: "2 weeks ago",
                service: "Seasonal HVAC Tune-Up",
                review:
                  "Joined their annual maintenance plan. They cleaned the coils, flushed out the drain pan, and calibrated our thermostat. Our electric bill dropped by almost 20% the following month!",
              },
            ].map((rev, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{rev.name}</div>
                    <div className="text-slate-400">{rev.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-semibold">
                      {rev.service}
                    </div>
                    <div className="text-[10px] text-slate-400">{rev.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO FAQ ACCORDION SECTION */}
      <section
        className="py-20 bg-slate-900 border-b border-slate-800"
        id="faqs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={GENERAL_FAQS} />
        </div>
      </section>

      {/* EMERGENCY CALLOUT CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-sky-900 via-slate-900 to-amber-950 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>HVAC Emergency Alert</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                No Cooling or Heating Right Now?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base">
                Do not suffer in extreme heat or cold. Our emergency service
                trucks are on call 24 hours a day with guaranteed 60-minute
                response times.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span>Call Hotline: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

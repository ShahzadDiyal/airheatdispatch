import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, getSpeakableSchema, getEmergencyServiceSchema } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import { TEXAS_CITIES_DATA } from "@/config/locations/texas";
import { ALABAMA_PRESET_CITIES_DATA } from "@/config/locations/alabama";
import { getLocationData } from "@/lib/locations";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ZipChecker from "@/components/locations/ZipChecker";
import ClimateAlertBanner from "@/components/home/ClimateAlertBanner";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { getStateCode } from "@/config/states";

interface PageProps {
  params: Promise<{ service: string; state: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; state: string; city: string }[] = [];
  const prebuiltLocations = [...TEXAS_CITIES_DATA, ...ALABAMA_PRESET_CITIES_DATA];
  for (const s of CORE_SERVICES) {
    for (const cityData of prebuiltLocations) {
      params.push({
        service: s.slug,
        state: cityData.stateSlug,
        city: cityData.citySlug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, state, city } = await params;
  const service = CORE_SERVICES.find(
    (s) => s.slug === serviceSlug || (serviceSlug === "air-conditioning-repair" && s.slug === "ac-repair")
  );
  const locationData = getLocationData(state, city);

  if (!service || !locationData) return { title: "Location Service Not Found" };

  const cityName = locationData.cityName;
  const stateCode = getStateCode(locationData.stateSlug);

  return {
    title: `${service.name} in ${cityName}, ${stateCode} | AirHeat Dispatch`,
    description: `Connect with independent local HVAC contractors for ${service.name} in ${cityName}, ${stateCode}. 24/7 phone hotline connection.`,
    alternates: { canonical: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}` },
    openGraph: {
      title: `${service.name} in ${cityName}, ${stateCode} | AirHeat Dispatch`,
      description: `Connect with independent local HVAC contractors for ${service.name} in ${cityName}, ${stateCode}.`,
      url: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}`,
    },
  };
}

export default async function LocalServicePage({ params }: PageProps) {
  const { service: serviceSlug, state, city } = await params;
  const service = CORE_SERVICES.find(
    (s) => s.slug === serviceSlug || (serviceSlug === "air-conditioning-repair" && s.slug === "ac-repair")
  );
  const locationData = getLocationData(state, city);

  if (!service || !locationData) notFound();

  const cityName = locationData.cityName;
  const stateName = locationData.stateName;
  const stateCode = getStateCode(locationData.stateSlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: service.name, item: `${SITE_CONFIG.domain}/${service.slug}` },
      { "@type": "ListItem", position: 3, name: `${cityName}, ${stateCode}`, item: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const pageUrl = `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}`;
  const speakableSchema = getSpeakableSchema(pageUrl);
  const emergencySchema = getEmergencyServiceSchema(`${cityName}, ${stateCode}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }} />

      <article className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <Link href={`/${service.slug}`} rel="dofollow" className="hover:text-blue-600 font-medium truncate max-w-[100px] sm:max-w-none">{service.name}</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{cityName}, {stateName}</span>
          </nav>

          {/* Contextual Climate Alert Banner */}
          <ClimateAlertBanner cityName={cityName} stateName={stateName} />

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{cityName}, {stateCode} Local HVAC Hub</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name} in {cityName}, {stateCode}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
                Connect with independent local HVAC contractors serving {cityName} and surrounding {stateName} communities.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-orange-600 shadow-xs">
                  <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0" />
                  Independent Local Providers
                </span>
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  24/7 Phone Connection Hotline
                </span>
              </div>

              {/* Call CTA Button */}
              <div className="pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call now to connect with an HVAC provider in ${cityName}`}
                  className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm inline-flex items-center gap-2 sm:gap-3 shadow-md transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white shrink-0" />
                  <span className="truncate">Call {SITE_CONFIG.phone} ({cityName})</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Local Service Area Highlights
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locationData.intro}
              </p>
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Communities Served:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {locationData.subAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Local Climate Context Block */}
          <section className="my-10 sm:my-14 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              HVAC Demands & Climate Considerations in {cityName}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {locationData.climateContext}
            </p>
          </section>

          {/* Direct Answer Card */}
          <DirectAnswerCard
            questionTitle={`What Should Homeowners Know About ${service.name} in ${cityName}?`}
            directAnswer={`Homeowners seeking ${service.name.toLowerCase()} in ${cityName} can connect with independent local HVAC contractors through AirHeat Dispatch. Local technicians assist with system diagnostics, component replacement, and maintenance tailored to ${stateName} weather conditions.`}
            keyPoints={service.features}
          />

          {/* Common Local HVAC Problems */}
          <section className="my-12 sm:my-16 space-y-6 sm:space-y-8">
            <div className="text-center px-2 sm:px-6 lg:px-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                Common HVAC Issues in {cityName}, {stateCode}
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Realistic heating and cooling challenges experienced by local homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {locationData.commonProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-2 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{prob.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related HVAC Services in City */}
          <section className="my-12 sm:my-16 space-y-5 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              All HVAC Services Available in {cityName}, {stateCode}
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {CORE_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${state}/${city}`}
                  className={`p-3 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-2 group ${
                    s.slug === service.slug
                      ? "bg-blue-50 border-blue-300 text-blue-700 shadow-xs"
                      : "bg-white border-slate-200 text-slate-800 hover:border-blue-300 shadow-xs"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold group-hover:text-blue-600 transition-colors truncate">
                      {s.name} in {cityName}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Connect with local providers
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* Coverage Checker */}
          <ZipChecker />

          {/* Local FAQs */}
          <div className="my-12 sm:my-16">
            <FaqAccordion
              faqs={locationData.faqs}
              title={`Frequently Asked Questions About HVAC Service in ${cityName}`}
              subtitle="Helpful answers for homeowners connecting with local independent service providers."
            />
          </div>

          {/* Mandated Disclaimer */}
          <div className="my-8 sm:my-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong className="text-slate-900 block mb-1">Legal Disclaimer:</strong>
            {SITE_CONFIG.disclaimer}
          </div>

          {/* Bottom CTA Banner */}
          <section className="my-12 sm:my-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center space-y-5 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Need HVAC Assistance in {cityName}, {stateCode}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Independent HVAC contractors are available in {cityName} and surrounding areas. Call our connection line now.
            </p>
            <div className="flex justify-center pt-1">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
                className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span>Call {SITE_CONFIG.phone} Now</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SITE_CONFIG,
  CORE_SERVICES,
  ALL_STATES_DATA,
  getStateData,
  getStateCities,
  LocationData,
} from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import ZipChecker from "@/components/ZipChecker";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Wrench,
  Clock,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ service: string; state: string }>;
}

export async function generateStaticParams() {
  const states = Object.keys(ALL_STATES_DATA);
  const params: { service: string; state: string }[] = [];
  for (const s of CORE_SERVICES) {
    for (const state of states) {
      params.push({ service: s.slug, state });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, state: stateSlug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);
  const stateData = getStateData(stateSlug);

  if (!service || !stateData) return { title: "State Service Not Found" };

  return {
    title: `${service.name} in ${stateData.stateName} | Local HVAC Provider Connection`,
    description: `Connect with independent local HVAC contractors for ${service.name} across ${stateData.stateName} cities. 24/7 ${stateData.stateName} phone connection hotline.`,
    alternates: { canonical: `${SITE_CONFIG.domain}/${service.slug}/${stateSlug}` },
    openGraph: {
      title: `${service.name} in ${stateData.stateName} | Local HVAC Provider Connection`,
      description: `Connect with independent local HVAC contractors for ${service.name} across ${stateData.stateName} cities.`,
      url: `${SITE_CONFIG.domain}/${service.slug}/${stateSlug}`,
    },
  };
}

export default async function StateServicePage({ params }: PageProps) {
  const { service: serviceSlug, state: stateSlug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);
  const stateData = getStateData(stateSlug);

  if (!service || !stateData) notFound();

  const citiesList: LocationData[] = getStateCities(stateSlug);
  const isTexas = stateSlug.toLowerCase() === "texas";
  const stateCode = isTexas ? "TX" : stateSlug.toLowerCase() === "alabama" ? "AL" : stateSlug.toUpperCase();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: service.name, item: `${SITE_CONFIG.domain}/${service.slug}` },
      { "@type": "ListItem", position: 3, name: stateData.stateName, item: `${SITE_CONFIG.domain}/${service.slug}/${stateSlug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stateData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <Link href={`/${service.slug}`} rel="dofollow" className="hover:text-blue-600 font-medium truncate max-w-[120px] sm:max-w-none">{service.name}</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{stateData.stateName}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{stateData.stateName} Statewide HVAC Service Connection</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name} in {stateData.stateName}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
                Connect with independent local HVAC contractors across major {stateData.stateName} cities for 24/7 air conditioning repair, furnace troubleshooting, and heating assistance.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-orange-600 shadow-xs">
                  <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0" />
                  Independent Local {stateData.stateName} Contractors
                </span>
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  24/7 Statewide Hotline
                </span>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
                  className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm inline-flex items-center gap-2 sm:gap-3 shadow-md transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white shrink-0" />
                  <span className="truncate">Call {SITE_CONFIG.phone} ({stateData.stateName})</span>
                </a>
              </div>
            </div>

            {/* Right Side Overview Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                {stateData.stateName} Climate & Service Demand
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {stateData.climateOverview}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900 block mb-1">Statewide Connection Hotline:</strong>
                Call (555) 839-4328 to connect with an independent HVAC provider serving your local {stateData.stateName} zip code.
              </div>
            </div>
          </div>

          <DirectAnswerCard
            questionTitle={`How Do ${stateData.stateName} Homeowners Connect With Providers for ${service.name}?`}
            directAnswer={`Homeowners throughout ${stateData.stateName} can connect with independent local HVAC contractors for ${service.name.toLowerCase()} by calling (555) 839-4328. Local contractors serve major ${stateData.stateName} cities including ${stateData.majorCities.slice(0, 6).map((c) => c.name).join(", ")}, and surrounding communities.`}
            keyPoints={service.features}
          />

          {/* Major Cities Directory Grid */}
          <section className="my-12 sm:my-16 space-y-6 sm:space-y-8">
            <div className="text-center px-2 sm:px-6 lg:px-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                Major {stateData.stateName} Cities Covered
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Select your {stateData.stateName} city to view localized {service.name.toLowerCase()} details and climate information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {citiesList.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{stateData.stateName} Region</span>
                      </span>
                      <span className="font-bold text-blue-600 shrink-0">{stateCode}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name} in {cityData.cityName}, {stateCode}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {cityData.intro}
                    </p>
                  </div>

                  <Link
                    href={`/${service.slug}/${stateSlug}/${cityData.citySlug}`}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>View {cityData.cityName} Local Hub</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <ZipChecker />

          {/* State FAQs */}
          <div className="my-12 sm:my-16">
            <FaqAccordion
              faqs={stateData.faqs}
              title={`Frequently Asked Questions About ${stateData.stateName} HVAC Connection`}
              subtitle={`Information on connecting with independent local contractors in ${stateData.stateName}.`}
            />
          </div>

          {/* Mandated Legal Disclaimer */}
          <div className="my-8 sm:my-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong className="text-slate-900 block mb-1">Legal Disclaimer:</strong>
            {SITE_CONFIG.disclaimer}
          </div>

          {/* Call CTA Banner */}
          <section className="my-12 sm:my-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center space-y-5 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Need {service.name} Assistance in {stateData.stateName}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Independent local HVAC contractors are available across {stateData.stateName}. Call our 24/7 connection line now.
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

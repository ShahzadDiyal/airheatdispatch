import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, TEXAS_STATE_DATA, TEXAS_CITIES_DATA } from "@/config/site";
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
  return CORE_SERVICES.map((s) => ({
    service: s.slug,
    state: TEXAS_STATE_DATA.stateSlug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug, state } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);

  if (!service || state !== TEXAS_STATE_DATA.stateSlug) {
    return { title: "State Service Not Found" };
  }

  return {
    title: `${service.name} in Texas | Local HVAC Provider Connection`,
    description: `Connect with independent local HVAC contractors for ${service.name} across Texas cities. 24/7 Texas phone connection hotline.`,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/${service.slug}/${state}`,
    },
    openGraph: {
      title: `${service.name} in Texas | Local HVAC Provider Connection`,
      description: `Connect with independent local HVAC contractors for ${service.name} across Texas cities.`,
      url: `${SITE_CONFIG.domain}/${service.slug}/${state}`,
    },
  };
}

export default async function StateServicePage({ params }: PageProps) {
  const { service: serviceSlug, state } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);

  if (!service || state !== TEXAS_STATE_DATA.stateSlug) {
    notFound();
  }

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
        name: service.name,
        item: `${SITE_CONFIG.domain}/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Texas",
        item: `${SITE_CONFIG.domain}/${service.slug}/${state}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TEXAS_STATE_DATA.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-slate-50 min-h-screen py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${service.slug}`} rel="dofollow" className="hover:text-blue-600 font-medium">
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Texas</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Texas Statewide HVAC Service Connection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name} in Texas
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Connect with independent local HVAC contractors across major Texas cities for 24/7 air conditioning repair, furnace troubleshooting, and heating assistance.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-orange-600 shadow-xs">
                  <ShieldAlert className="w-4 h-4 text-orange-500" />
                  Independent Local Texas Contractors
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600" />
                  24/7 Statewide Hotline
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
                  className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm inline-flex items-center gap-3 shadow-md transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call {SITE_CONFIG.phone} (Texas Connection)</span>
                </a>
              </div>
            </div>

            {/* Right Side Overview Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Texas Climate & Service Demand
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {TEXAS_STATE_DATA.climateOverview}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900 block mb-1">Statewide Connection Hotline:</strong>
                Call (555) 839-4328 to connect with an independent HVAC provider serving your local Texas zip code.
              </div>
            </div>
          </div>

          <DirectAnswerCard
            questionTitle={`How Do Texas Homeowners Connect With Providers for ${service.name}?`}
            directAnswer={`Homeowners throughout Texas can connect with independent local HVAC contractors for ${service.name.toLowerCase()} by calling (555) 839-4328. Local contractors serve major Texas cities including Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, and Lubbock.`}
            keyPoints={service.features}
          />

          {/* Major Texas Cities Directory Grid */}
          <section className="my-16 space-y-8">
            <div className="text-center px-3 md:px-6 xl:px-12 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Major Texas Cities Covered
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Select your Texas city to view localized {service.name.toLowerCase()} details and climate information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEXAS_CITIES_DATA.map((cityData) => (
                <div
                  key={cityData.citySlug}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 space-y-4 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        Texas Region
                      </span>
                      <span className="font-bold text-blue-600">TX</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name} in {cityData.cityName}, TX
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {cityData.intro}
                    </p>
                  </div>

                  <Link
                    href={`/${service.slug}/${state}/${cityData.citySlug}`}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>View {cityData.cityName} Local Hub</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <ZipChecker />

          {/* Texas FAQs */}
          <div className="my-16">
            <FaqAccordion
              faqs={TEXAS_STATE_DATA.faqs}
              title="Frequently Asked Questions About Texas HVAC Connection"
              subtitle="Information on connecting with independent local contractors in Texas."
            />
          </div>

          {/* Mandated Legal Disclaimer */}
          <div className="my-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong className="text-slate-900 block mb-1">Legal Disclaimer:</strong>
            {SITE_CONFIG.disclaimer}
          </div>

          {/* Call CTA Banner */}
          <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need {service.name} Assistance in Texas?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Independent local HVAC contractors are available across Texas. Call our 24/7 connection line now.
            </p>
            <div className="flex justify-center pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
                className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {SITE_CONFIG.phone} Now</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

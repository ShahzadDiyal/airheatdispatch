import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, TEXAS_CITIES_DATA, getLocationData } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import ZipChecker from "@/components/ZipChecker";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ service: string; state: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; state: string; city: string }[] = [];
  for (const s of CORE_SERVICES) {
    for (const cityData of TEXAS_CITIES_DATA) {
      params.push({
        service: s.slug,
        state: cityData.stateSlug,
        city: cityData.citySlug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug, state, city } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);
  const locationData = getLocationData(state, city);

  if (!service || !locationData) {
    return { title: "Location Service Not Found" };
  }

  const cityName = locationData.cityName;
  const stateCode = "TX";

  return {
    title: `${service.name} in ${cityName}, ${stateCode} | AirHeat Dispatch`,
    description: `Connect with independent local HVAC contractors for ${service.name} in ${cityName}, ${stateCode}. 24/7 phone hotline connection.`,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}`,
    },
    openGraph: {
      title: `${service.name} in ${cityName}, ${stateCode} | AirHeat Dispatch`,
      description: `Connect with independent local HVAC contractors for ${service.name} in ${cityName}, ${stateCode}.`,
      url: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}`,
    },
  };
}

export default async function LocalServicePage({ params }: PageProps) {
  const { service: serviceSlug, state, city } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);
  const locationData = getLocationData(state, city);

  if (!service || !locationData) {
    notFound();
  }

  const cityName = locationData.cityName;
  const stateName = locationData.stateName;

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
        name: `${cityName}, TX`,
        item: `${SITE_CONFIG.domain}/${service.slug}/${state}/${city}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationData.faqs.map((faq) => ({
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
            className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-8"
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
            <span className="text-slate-900 font-semibold">
              {cityName}, {stateName}
            </span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{cityName}, TX Local HVAC Hub</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name} in {cityName}, TX
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Connect with independent local HVAC contractors serving {cityName} and surrounding Texas communities.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-orange-600 shadow-xs">
                  <ShieldAlert className="w-4 h-4 text-orange-500" />
                  Independent Local Providers
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600" />
                  24/7 Phone Connection Hotline
                </span>
              </div>

              {/* Call CTA Button */}
              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call now to connect with an HVAC provider in ${cityName}`}
                  className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm inline-flex items-center gap-3 shadow-md transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call {SITE_CONFIG.phone} (Connect in {cityName})</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
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
          <section className="my-14 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              HVAC Demands & Climate Considerations in {cityName}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {locationData.climateContext}
            </p>
          </section>

          {/* Direct Answer Card */}
          <DirectAnswerCard
            questionTitle={`What Should Homeowners Know About ${service.name} in ${cityName}?`}
            directAnswer={`Homeowners seeking ${service.name.toLowerCase()} in ${cityName} can connect with independent local HVAC contractors through AirHeat Dispatch. Local technicians assist with system diagnostics, component replacement, and maintenance tailored to Texas weather conditions.`}
            keyPoints={service.features}
          />

          {/* Common Local HVAC Problems */}
          <section className="my-16 space-y-8">
            <div className="text-center px-3 md:px-6 xl:px-12 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Common HVAC Issues in {cityName}, TX
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Realistic heating and cooling challenges experienced by Texas homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationData.commonProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
          <section className="my-16 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              All HVAC Services Available in {cityName}, TX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${state}/${city}`}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    s.slug === service.slug
                      ? "bg-blue-50 border-blue-300 text-blue-700 shadow-xs"
                      : "bg-white border-slate-200 text-slate-800 hover:border-blue-300 shadow-xs"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold group-hover:text-blue-600 transition-colors">
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
          <div className="my-16">
            <FaqAccordion
              faqs={locationData.faqs}
              title={`Frequently Asked Questions About HVAC Service in ${cityName}`}
              subtitle="Helpful answers for homeowners connecting with local independent service providers."
            />
          </div>

          {/* Mandated Disclaimer Callout */}
          <div className="my-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
            <strong className="text-slate-900 block mb-1">
              Legal Disclaimer:
            </strong>
            {SITE_CONFIG.disclaimer}
          </div>

          {/* Bottom CTA Banner */}
          <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need HVAC Assistance in {cityName}, TX?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Independent HVAC contractors are available in {cityName} and surrounding areas. Call our connection line now.
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

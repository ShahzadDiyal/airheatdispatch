import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, TEXAS_CITIES_DATA } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import ZipChecker from "@/components/ZipChecker";
import {
  Phone,
  CheckCircle2,
  Clock,
  Wrench,
  ArrowRight,
  ShieldAlert,
  MapPin,
} from "lucide-react";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return CORE_SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.fullTitle} | AirHeat Dispatch`,
    description: `${service.shortDesc} Call ${SITE_CONFIG.phone} to connect with an independent local HVAC contractor.`,
    alternates: { canonical: `${SITE_CONFIG.domain}/${service.slug}` },
    openGraph: {
      title: `${service.fullTitle} | AirHeat Dispatch`,
      description: service.shortDesc,
      url: `${SITE_CONFIG.domain}/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_CONFIG.domain}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_CONFIG.domain}/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: "HVAC Homeowner Connection Service",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.domain,
    },
    description: service.directAnswer,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <Link href="/services" rel="dofollow" className="hover:text-blue-600 font-medium">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{service.name}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5 shrink-0" />
                <span>HVAC Service Connection</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.fullTitle}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
                {service.heroHeadline}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-orange-600 shadow-xs">
                  <ShieldAlert className="w-4 h-4 text-orange-500 shrink-0" />
                  Independent Local Contractors
                </span>
                <span className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  24/7 Hotline Connection
                </span>
              </div>

              {/* Call CTA Button */}
              <div className="pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call now to connect with a local provider for ${service.name}`}
                  className="px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm inline-flex items-center gap-2 sm:gap-3 shadow-md transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-white shrink-0" />
                  <span className="truncate">Call {SITE_CONFIG.phone} to Connect</span>
                </a>
              </div>
            </div>

            {/* Service Summary Highlight Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Service Overview
              </h2>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-900 block mb-1">Texas Local Hubs:</span>
                Are you located in Texas? View local coverage for{" "}
                <Link href={`/${service.slug}/texas`} className="text-blue-600 font-bold underline hover:text-blue-700">
                  {service.name} in Texas Cities
                </Link>.
              </div>
            </div>
          </div>

          {/* Direct Answer Block */}
          <DirectAnswerCard
            questionTitle={`What is involved in ${service.name}?`}
            directAnswer={service.directAnswer}
            keyPoints={service.features}
          />

          {/* Process Steps Section */}
          <section className="my-12 sm:my-16 space-y-8">
            <div className="text-center px-2 sm:px-6 lg:px-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                How to Get {service.name} Help
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Connecting homeowners with independent local HVAC contractors in 4 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3 relative shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xs font-black uppercase tracking-wider shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Texas Hub Link Card */}
          <section className="my-8 sm:my-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Looking for {service.name} in Texas?
                </h3>
                <p className="text-xs text-slate-500">
                  Explore coverage across 10 major Texas cities including Houston, Dallas, San Antonio, and Austin.
                </p>
              </div>
            </div>
            <Link
              href={`/${service.slug}/texas`}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shrink-0 shadow-xs transition-colors whitespace-nowrap"
            >
              <span>Texas {service.name} Hub</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </section>

          {/* Zip Coverage Checker */}
          <ZipChecker />

          {/* FAQs Accordion */}
          <div className="my-12 sm:my-16">
            <FaqAccordion
              faqs={service.faqs}
              title={`Frequently Asked Questions About ${service.name}`}
              subtitle="Answers to common homeowner questions about connecting with independent local contractors."
            />
          </div>

          {/* Call CTA Banner */}
          <section className="my-12 sm:my-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center space-y-5 sm:space-y-6 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              Ready to Connect With a Local Provider for {service.name}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Independent HVAC contractors are available in your area. Call our 24/7 hotline to get connected.
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

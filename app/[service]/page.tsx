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
  return CORE_SERVICES.map((s) => ({
    service: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.fullTitle} | AirHeat Dispatch`,
    description: `${service.shortDesc} Call ${SITE_CONFIG.phone} to connect with an independent local HVAC contractor.`,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/${service.slug}`,
    },
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

  if (!service) {
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
        name: "Services",
        item: `${SITE_CONFIG.domain}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_CONFIG.domain}/${service.slug}`,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" rel="dofollow" className="hover:text-amber-400">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{service.name}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>HVAC Service Connection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {service.fullTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                {service.heroHeadline}
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Independent Local Contractors
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-sky-400" />
                  24/7 Hotline Connection
                </span>
              </div>

              {/* Call CTA Button */}
              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call now to connect with a local provider for ${service.name}`}
                  className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm inline-flex items-center gap-3 shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call {SITE_CONFIG.phone} to Connect</span>
                </a>
              </div>
            </div>

            {/* Service Summary Highlight Box */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Service Overview
              </h2>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-white block mb-1">
                  Texas Local Hubs:
                </span>
                Are you located in Texas? View local coverage for{" "}
                <Link
                  href={`/${service.slug}/texas`}
                  className="text-amber-400 font-bold underline"
                >
                  {service.name} in Texas Cities
                </Link>
                .
              </div>
            </div>
          </div>

          {/* Direct Answer Block (AEO / GEO Optimization) */}
          <DirectAnswerCard
            questionTitle={`What is involved in ${service.name}?`}
            directAnswer={service.directAnswer}
            keyPoints={service.features}
          />

          {/* Process Steps Section */}
          <section className="my-16 space-y-8">
            <div className="text-center px-3 md:px-6 xl:px-12 mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How to Get {service.name} Help
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Connecting homeowners with independent local HVAC contractors in 4 simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden"
                >
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Step {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Texas Hub Link Card */}
          <section className="my-12 p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Looking for {service.name} in Texas?
                </h3>
                <p className="text-xs text-slate-400">
                  Explore coverage across 10 major Texas cities including Houston, Dallas, San Antonio, and Austin.
                </p>
              </div>
            </div>
            <Link
              href={`/${service.slug}/texas`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs flex items-center gap-2 border border-slate-700 shrink-0"
            >
              <span>Texas {service.name} Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Zip Coverage Checker */}
          <ZipChecker />

          {/* FAQs Accordion */}
          <div className="my-16">
            <FaqAccordion
              faqs={service.faqs}
              title={`Frequently Asked Questions About ${service.name}`}
              subtitle="Answers to common homeowner questions about connecting with independent local contractors."
            />
          </div>

          {/* Call CTA Banner */}
          <section className="my-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Ready to Connect With a Local Provider for {service.name}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Independent HVAC contractors are available in your area. Call our 24/7 hotline to get connected.
            </p>
            <div className="flex justify-center pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call {SITE_CONFIG.phone} Now</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

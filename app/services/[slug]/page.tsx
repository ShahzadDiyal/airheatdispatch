import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceEstimator from "@/components/ServiceEstimator";
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Wrench,
  DollarSign,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CORE_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.fullTitle} | ${SITE_CONFIG.name}`,
    description: `${service.shortDesc} Upfront flat-rate pricing starting at $${service.startingPrice}. Call (555) 839-4328 for 24/7 same-day dispatch.`,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/services/${service.slug}`,
    },
    openGraph: {
      title: service.fullTitle,
      description: service.shortDesc,
      url: `${SITE_CONFIG.domain}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // BreadcrumbList JSON-LD Schema
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
        item: `${SITE_CONFIG.domain}/services/${service.slug}`,
      },
    ],
  };

  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: "HVAC Service and Repair",
    provider: {
      "@type": "HVACBusiness",
      name: SITE_CONFIG.legalName,
      telephone: SITE_CONFIG.phone,
      url: SITE_CONFIG.domain,
    },
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    description: service.directAnswer,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: service.startingPrice,
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  };

  // FAQPage JSON-LD Schema for this specific service
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
      {/* Dynamic Inline JSON-LD Schemas */}
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

      <article className="bg-slate-950 min-h-screen py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-sky-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" rel="dofollow" className="hover:text-sky-400">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{service.name}</span>
          </nav>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Specialized HVAC Service</span>
              </div>

              {/* Strictly Enforced H1 Tag */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {service.fullTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                {service.heroHeadline}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Estimated: {service.priceRange}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-sky-400" />
                  24/7 Same-Day Arrival
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Licensed & Guaranteed
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>

                <a
                  href="#book-service"
                  rel="dofollow"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <span>Book {service.name}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>

            {/* Service Summary Highlight Box */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Service Guarantee & Features
              </h3>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <span className="font-bold text-white block mb-1">Zero Risk Guarantee:</span>
                Diagnostic fee is waived 100% when you approve any recommended repair during our visit.
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
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our 4-Step {service.name} Process
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Engineered for maximum efficiency, safety, and long-term HVAC reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden"
                >
                  <div className="text-xs font-black text-sky-400 uppercase tracking-wider">
                    Step {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Comparison Table */}
          <section className="my-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Transparent Service Pricing Comparison</h2>
            <p className="text-slate-400 text-sm">
              We operate on an upfront flat-rate pricing model. You review the exact quote before any work begins.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-4">Service Tier / Component</th>
                    <th className="p-4">Warranty Coverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-semibold text-white">Full System Diagnostic Check</td>
                    <td className="p-4 text-slate-400">100% Satisfaction</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Standard Capacitor / Relay Swap</td>
                    <td className="p-4 text-slate-400">1-Year Full Warranty</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Refrigerant Leak Detection & Recharge</td>
                    <td className="p-4 text-slate-400">Leak Seal Guarantee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Blower Motor / Igniter Replacement</td>
                    <td className="p-4 text-slate-400">OEM Manufacturer Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Interactive Calculator Integration */}
          <div className="my-16">
            <ServiceEstimator />
          </div>

          {/* Service FAQs Accordion */}
          <div className="my-16">
            <FaqAccordion
              faqs={service.faqs}
              title={`Frequently Asked Questions About ${service.name}`}
              subtitle="Direct answers targeting high-intent homeowner queries and search engine snippets."
            />
          </div>

          {/* Contact / Booking CTA Section */}
          <section id="book-service" className="my-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl font-black text-white">
              Ready to Book Your {service.name}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Technicians are on call 24 hours a day in your area. Contact our dispatch desk now for immediate response.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch: {SITE_CONFIG.phone}</span>
              </a>
              <Link
                href="/"
                rel="dofollow"
                className="px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800"
              >
                Return to Home Page
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

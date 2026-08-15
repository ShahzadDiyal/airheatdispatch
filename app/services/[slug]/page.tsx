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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.fullTitle} | ${SITE_CONFIG.name}`,
    description: `${service.shortDesc} ${service.priceLabel}. Call ${SITE_CONFIG.phone} for 24/7 same-day dispatch.`,
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
      price: "0.00",
      description: service.priceLabel,
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

      <article className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              rel="dofollow"
              className="hover:text-amber-400"
            >
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
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  {service.priceLabel}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Clock className="w-4 h-4 text-sky-400" />
                  24/7 Same-Day Arrival
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {SITE_CONFIG.licenseText}
                </span>
              </div>

              {/* CTAs with explicit Phone Number */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call emergency dispatch hotline at ${SITE_CONFIG.phone}`}
                  className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span> {SITE_CONFIG.phone}</span>
                </a>

                <a
                  href="#book-service"
                  rel="dofollow"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Service Summary Highlight Box */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Service Guarantees & Features
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
                  Zero Risk Guarantee:
                </span>
                Diagnostic inspection fee is waived 100% when you approve any
                recommended repair during our visit.
              </div>
            </div>
          </div>

          {/* Direct Answer Block (AEO / GEO Optimization) */}
          <DirectAnswerCard
            questionTitle={`What is involved in ${service.name}?`}
            directAnswer={service.directAnswer}
            keyPoints={service.features}
          />

          {/* Rich Semantic Topical Content Section */}
          <section className="my-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Technical Principles & Diagnostic Science of {service.name}
            </h2>
            <div className="text-sm text-slate-300 leading-relaxed space-y-4">
              <p>
                Heating and air conditioning systems operate on complex
                vapor-compression refrigeration cycles and thermodynamic heat
                transfer principles. When an HVAC unit suffers from reduced
                cooling capacity, short-cycling, or electrical strain,
                technicians perform systematic diagnostics targeting subcooling,
                superheat, static duct pressure, and electrical amperage draw.
              </p>
              <p>
                Maintaining optimal SEER2 (Seasonal Energy Efficiency Ratio)
                standards requires precise metering device calibration (TXV or
                fixed orifice), clean thermal evaporator coils, and leak-free
                copper refrigerant lines. Failure to address minor component
                wear—such as deteriorating dual-run capacitors or pitted
                magnetic contactors—frequently leads to total compressor motor
                burnouts during high summer heat loads.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-amber-400 block mb-1">
                    Thermodynamic Health Check:
                  </span>
                  Verifying subcooling & superheat against manufacturer
                  specifications for R-410A / R-32 systems.
                </div>
                <div>
                  <span className="font-bold text-sky-400 block mb-1">
                    Electrical Amp Draw Audit:
                  </span>
                  Testing start/run capacitors, blower motor windings, and
                  compressor LRA (Locked Rotor Amps).
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps Section */}
          <section className="my-16 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our 4-Step {service.name} Process
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Engineered for maximum efficiency, safety, and long-term HVAC
                reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 relative overflow-hidden"
                >
                  <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
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

          {/* Transparent Pricing Comparison Table (Quote Based) */}
          <section className="my-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Transparent Service Tier Comparison
            </h2>
            <p className="text-slate-300 text-sm">
              We operate on an upfront flat-rate pricing model. You review and
              sign off on the exact itemized quote before any work begins.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-4">Service Tier / Component</th>
                    <th className="p-4 text-amber-400">
                      AirHeat Dispatch Quote Model
                    </th>
                    <th className="p-4">Diagnostic Policy</th>
                    {/* <th className="p-4">Warranty Protection</th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Full System Diagnostic Check
                    </td>
                    <td className="p-4 font-bold text-emerald-400">
                      100% Waived with Repair
                    </td>
                    <td className="p-4 text-slate-300">
                      Full 21-Point Inspection
                    </td>
                    <td className="p-4 text-slate-300">100% Satisfaction</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Standard Capacitor / Relay Swap
                    </td>
                    <td className="p-4 font-bold text-amber-400">
                      Upfront Flat-Rate Quote
                    </td>
                    <td className="p-4 text-slate-300">OEM Replacement Part</td>
                    {/* <td className="p-4 text-slate-300">1-Year Full Warranty</td> */}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Refrigerant Leak Detection & Recharge
                    </td>
                    <td className="p-4 font-bold text-amber-400">
                      Upfront Flat-Rate Quote
                    </td>
                    <td className="p-4 text-slate-300">Halogen Leak Audit</td>
                    <td className="p-4 text-slate-300">Leak Seal Guarantee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Blower Motor / Igniter Replacement
                    </td>
                    <td className="p-4 font-bold text-amber-400">
                      Upfront Flat-Rate Quote
                    </td>
                    <td className="p-4 text-slate-300">Factory OEM Parts</td>
                    {/* <td className="p-4 text-slate-300">OEM Warranty Coverage</td> */}
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
          <section
            id="book-service"
            className="my-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6"
          >
            <h2 className="text-3xl font-black text-white">
              Ready to Request Your Free Quote for {service.name}?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Technicians are on call 24 hours a day in your area. Contact our
              dispatch desk now for immediate response.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                aria-label={`Call dispatch hotline at ${SITE_CONFIG.phone}`}
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <Link
                href="/contact"
                rel="dofollow"
                className="px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-800"
              >
                Contact Dispatch Team
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

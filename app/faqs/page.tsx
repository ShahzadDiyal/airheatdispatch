import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, GENERAL_FAQS } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import FaqAccordion from "@/components/ui/FaqAccordion";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import { HelpCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC FAQs | Direct Answers to Air Conditioning & Heating Questions",
  description:
    "Get clear, expert answers to key HVAC service, repair, maintenance, and connection questions. Direct answers formatted for homeowners and search engines.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/faqs`,
  },
};

export default function FaqsPage() {
  const allFaqs = [...GENERAL_FAQS, ...CORE_SERVICES.flatMap((s) => s.faqs)];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "HVAC FAQs", item: `${SITE_CONFIG.domain}/faqs` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">HVAC FAQs</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>AEO Knowledge Base</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              HVAC Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Find concise answers to common questions about AC repair, furnace troubleshooting, system maintenance, and connecting with local contractors.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="How Often Should HVAC Systems Be Inspected and Serviced?"
            directAnswer="Residential HVAC systems require professional bi-annual maintenance: once in spring for air conditioning systems and once in autumn for heating systems. Regular tune-ups help prevent unexpected seasonal breakdowns."
          />

          <div className="my-10 sm:my-14">
            <FaqAccordion
              faqs={allFaqs}
              title="Comprehensive HVAC Q&A Directory"
              subtitle="Direct answers formatted for easy homeowner reading and search engine extraction."
            />
          </div>

          {/* CTA Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-12 text-center space-y-4 my-10 sm:my-14 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Have a Specific HVAC Question?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Our 24/7 hotline is available to connect you with an independent local HVAC contractor.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              aria-label={`Call hotline at ${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>Call Connection Hotline: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

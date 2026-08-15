import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, GENERAL_FAQS, CORE_SERVICES } from "@/config/site";
import FaqAccordion from "@/components/FaqAccordion";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { HelpCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC FAQs | Direct Answers to Air Conditioning & Heating Questions",
  description:
    "Get clear, expert answers to key HVAC service, repair, maintenance, and diagnostic questions. Direct answers formatted for homeowners and AI search engines.",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
        name: "HVAC FAQs",
        item: `${SITE_CONFIG.domain}/faqs`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">HVAC FAQs</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>AEO Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              HVAC Service & Repair Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Find concise, expert answers to your most pressing questions about
              AC repair, furnace troubleshooting, maintenance schedules, and
              diagnostic costs.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="How Often Should HVAC Systems Be Inspected and Serviced?"
            directAnswer="Residential HVAC systems require professional bi-annual maintenance: once in spring for air conditioning systems and once in autumn for heating systems. Regular inspections prevent 85% of catastrophic breakdowns and maintain factory warranty compliance."
          />

          <div className="my-14">
            <FaqAccordion
              faqs={allFaqs}
              title="Comprehensive HVAC Q&A Directory"
              subtitle="Searchable direct answers formatted for instant search extraction."
            />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-3 md:p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Have a Specific HVAC Question Not Answered Here?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Our technical dispatch desk is staffed 24/7 by certified HVAC
              technicians who can diagnose issues over the phone or route an
              emergency service truck.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              aria-label={`Call technician hotline at ${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Technician Hotline: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions About HVAC Service & Repair",
  subtitle = "Direct answers to high-intent questions for homeowners, search engines, and AI assistants.",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>AEO / GEO Direct Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="text-slate-400 text-sm mt-2">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-slate-900 border-sky-500/50 shadow-lg shadow-sky-500/5"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-3 md:px-6 py-3 md:py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-2xl cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.question}
                </h3>
                <div
                  className={`p-2 rounded-lg transition-transform duration-200 shrink-0 ${
                    isOpen ? "bg-sky-500/20 text-sky-400 rotate-180" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60"
                >
                  {/* Direct Answer Block formatting for AI search snippet extraction */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-2">
                    <span className="text-xs font-semibold text-sky-400 block mb-1 uppercase tracking-wide">
                      Direct Answer Summary:
                    </span>
                    <p className="text-slate-200 font-medium">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

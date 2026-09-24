import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import ZipChecker from "@/components/locations/ZipChecker";
import DirectAnswerCard from "@/components/seo/DirectAnswerCard";
import { Phone, Mail, Clock, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Phone Connection Hotline | AirHeat Dispatch",
  description:
    "Need assistance connecting with a local HVAC contractor? Call our 24/7 hotline at (202) 931-4151 to connect with independent service providers.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE_CONFIG.domain}/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>24/7 Homeowner Hotline</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Contact AirHeat Dispatch
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Have an HVAC issue or need help connecting with a local heating or cooling provider? Reach out to our 24/7 hotline team.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="How Do I Connect With a Local HVAC Provider?"
            directAnswer="Call our 24/7 connection hotline directly at (202) 931-4151. Your call will be routed to an independent local HVAC contractor servicing your area."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 my-10 sm:my-12">
            {/* Contact Details Sidebar */}
            <div className="lg:col-span-5 bg-white  rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Connection Details</h2>

              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call connection hotline at ${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 font-bold hover:bg-orange-500/15 transition-colors"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-orange-500 text-white shadow-xs shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium">24/7 Phone Hotline</div>
                    <div className="text-sm sm:text-base text-orange-600 font-bold truncate">{SITE_CONFIG.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50  text-slate-700">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium">Support Email</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">{SITE_CONFIG.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50  text-slate-700">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium">Hotline Operating Hours</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600">24 Hours / 7 Days / 365 Days</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-50  text-slate-700">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 text-slate-600 mt-0.5 shrink-0">
                    <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium">Independent Providers</div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      Callers are connected directly with independent local service contractors.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white  rounded-2xl p-5 sm:p-8 space-y-5 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Request Connection Assistance</h2>
              <form className="space-y-4" action={`tel:${SITE_CONFIG.phoneRaw}`}>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      id="contact-form-name"
                      aria-label="Your Full Name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 sm:px-4 py-3 rounded-xl bg-slate-50  text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      id="contact-form-phone"
                      aria-label="Phone Number"
                      type="tel"
                      required
                     placeholder="(202) 931-4151 "
                      className="w-full px-3 sm:px-4 py-3 rounded-xl bg-slate-50  text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-form-address" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    City / Service ZIP Code *
                  </label>
                  <input
                    id="contact-form-address"
                    aria-label="City or Service ZIP Code"
                    type="text"
                    required
                    placeholder="Austin, TX 78701"
                    className="w-full px-3 sm:px-4 py-3 rounded-xl bg-slate-50  text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-form-notes" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    HVAC Issue Details (Optional)
                  </label>
                  <textarea
                    id="contact-form-notes"
                    aria-label="HVAC Issue Details"
                    rows={3}
                    placeholder="Describe your heating or air conditioning issue..."
                    className="w-full px-3 sm:px-4 py-3 rounded-xl bg-slate-50  text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-white shrink-0" />
                  <span className="truncate">Connect Now  {SITE_CONFIG.phone} →</span>
                </button>
              </form>
            </div>
          </div>

          <ZipChecker />
        </div>
      </div>
    </>
  );
}

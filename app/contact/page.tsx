import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import ZipChecker from "@/components/ZipChecker";
import DirectAnswerCard from "@/components/DirectAnswerCard";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Emergency Dispatch Hotline | 24/7 HVAC Service",
  description:
    "Need immediate HVAC Service and Repair? Call our 24/7 emergency dispatch hotline at (555) 839-4328 or schedule your service appointment online.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: `${SITE_CONFIG.domain}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" rel="dofollow" className="hover:text-amber-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Direct Contact</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Contact AirHeat Dispatch Hotline
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Have an HVAC emergency or need a flat-rate repair estimate? Reach out to our 24/7 dispatch team anytime.
            </p>
          </div>

          <DirectAnswerCard
            questionTitle="How Do I Contact AirHeat Dispatch for Immediate HVAC Repair?"
            directAnswer="You can reach our 24/7 emergency dispatch line directly at (555) 839-4328. Technicians are on call 24/7 with average arrival times under 60 minutes throughout Austin and surrounding communities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Direct Dispatch Details</h2>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  rel="dofollow"
                  aria-label={`Call emergency dispatch hotline at ${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold hover:bg-amber-400/30 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-amber-400 text-slate-950">
                    <Phone className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-medium">24/7 Emergency Hotline</div>
                    <div className="text-base text-amber-400 font-black">{SITE_CONFIG.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Support Email</div>
                    <div className="text-sm font-semibold">{SITE_CONFIG.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Dispatch Office</div>
                    <div className="text-sm font-semibold">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Business Hours</div>
                    <div className="text-sm font-semibold text-emerald-400">24 Hours / 7 Days / 365 Days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Send Direct Message to Dispatch Desk</h2>
              <form className="space-y-4" action={`tel:${SITE_CONFIG.phoneRaw}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-form-name" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      id="contact-form-name"
                      aria-label="Your Full Name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-form-phone" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      id="contact-form-phone"
                      aria-label="Phone Number"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-form-address" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                    Service Street Address *
                  </label>
                  <input
                    id="contact-form-address"
                    aria-label="Service Street Address"
                    type="text"
                    required
                    placeholder="100 Climate Way, Austin, TX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-form-notes" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                    HVAC Issue Details
                  </label>
                  <textarea
                    id="contact-form-notes"
                    aria-label="HVAC Issue Details"
                    rows={3}
                    placeholder="Please describe your system issue..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  Send Dispatch Request ({SITE_CONFIG.phone}) →
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

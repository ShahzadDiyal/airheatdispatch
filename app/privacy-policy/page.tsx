import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AirHeat Dispatch",
  description:
    "Official Privacy Policy of AirHeat Dispatch. Learn how phone connection records and user inquiries are processed.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Privacy Policy</span>
        </nav>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span>Legal Policy</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 20, 2026
          </p>
        </div>

        <div className="bg-white  rounded-2xl p-5 sm:p-8 space-y-6 text-sm leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              1. Information Collection & Usage
            </h2>
            <p>
              AirHeat Dispatch (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates a free homeowner connection service. We collect contact details (such as phone numbers, names, and general location/zip code data) provided by users when calling our hotline or filling out inquiry forms, solely for the purpose of connecting homeowners with independent local HVAC contractors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              2. Independent Service Contractors
            </h2>
            <p>
              When you use our service, your information may be shared with independent third-party HVAC service providers operating in your geographic area to fulfill your service request. We do not sell user data to unrelated third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              3. Data Security
            </h2>
            <p>
              We maintain security measures to protect user information transmitted through our website and phone connection lines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              4. Contact Details
            </h2>
            <p>
              For privacy inquiries regarding our connection service, please contact us at:
            </p>
            <div className="p-4 rounded-xl bg-slate-50  text-xs space-y-1">
              <p className="font-bold text-slate-900">{SITE_CONFIG.name}</p>
              <p className="text-blue-600 font-bold break-all">{SITE_CONFIG.email}</p>
              <p className="text-slate-700">Hotline: {SITE_CONFIG.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AirHeat Dispatch LLC",
  description:
    "Official Privacy Policy of AirHeat Dispatch HVAC & Thermal Solutions LLC. Details on how customer contact information and service dispatch records are handled.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-950 min-h-screen py-12 lg:py-20 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav
          className="flex items-center gap-2 text-xs text-slate-400 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" rel="dofollow" className="hover:text-amber-400">
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">Privacy Policy</span>
        </nav>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: January 1, 2026
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              1. Information Collection
            </h2>
            <p>
              {SITE_CONFIG.legalName} ("AirHeat Dispatch", "we", "us") collects
              personal contact information (name, phone number, physical service
              address, email address, and system diagnostic details) solely for
              the purpose of scheduling and executing HVAC service and repair
              calls.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              2. Use of Information
            </h2>
            <p>
              Your contact details are used exclusively to dispatch technicians,
              communicate appointment status, provide transparent flat-rate
              repair estimates, and deliver warranty documentation. We do NOT
              sell, rent, or trade your personal data to third-party
              advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              3. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) to
              safeguard your service booking records. Technical diagnostic notes
              are maintained strictly for warranty tracking under our{" "}
              {SITE_CONFIG.licenseText} coverage.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              4. Contact Information
            </h2>
            <p>
              For privacy inquiries or record deletion requests, please contact
              our dispatch office at:
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
              <p className="font-bold text-white">{SITE_CONFIG.legalName}</p>
              <p>
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city},{" "}
                {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
              </p>
              <p className="text-amber-400 font-bold">{SITE_CONFIG.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AirHeat Dispatch LLC",
  description:
    "Official Terms of Service for AirHeat Dispatch HVAC & Thermal Solutions LLC. Details on flat-rate repair quotes, diagnostic fees",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
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
          <span className="text-white font-semibold">Terms of Service</span>
        </nav>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: January 1, 2026
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              1. Service Scope & Flat-Rate Quotes
            </h2>
            <p>
              {SITE_CONFIG.legalName} provides residential and commercial HVAC
              diagnostics, emergency repairs, maintenance tune-ups, and air
              quality installations. All repair pricing is presented as an
              upfront flat-rate estimate prior to technician labor commencement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              2. Diagnostic Fee Policy
            </h2>
            <p>
              A standard diagnostic inspection applies to evaluate system
              failure. However, this diagnostic fee is 100% waived when the
              customer approves any recommended repair work during the same
              service visit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              3. 1-Year Parts & Labor Warranty
            </h2>
            <p>
              All replacement parts and repair workmanship performed by our
              EPA-certified technicians are warranted for 365 days from the
              invoice date. Warranty covers mechanical failure of replaced
              components under normal operating conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">
              4. Licensing & Authority
            </h2>
            <p>
              All HVAC operations comply with state guidelines under our{" "}
              {SITE_CONFIG.licenseText} status.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

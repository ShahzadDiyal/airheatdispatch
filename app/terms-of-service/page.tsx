import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AirHeat Dispatch",
  description:
    "Official Terms of Service for AirHeat Dispatch homeowner connection service.",
  alternates: {
    canonical: `${SITE_CONFIG.domain}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-12 lg:py-16 text-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" rel="dofollow" className="hover:text-blue-600 font-medium">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Terms of Service</span>
        </nav>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 20, 2026
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-6 text-sm leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              1. Free Connection Service
            </h2>
            <p>
              AirHeat Dispatch provides a free service to assist homeowners in connecting with independent local HVAC contractors. AirHeat Dispatch does not perform HVAC installation, maintenance, or repair services directly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              2. Independent Contractors & Licensing Verification
            </h2>
            <p>
              All contractors connected through this website are independent third-party service providers. AirHeat Dispatch does not warrant or guarantee any work performed by connected contractors. It is the sole responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              3. Depictions & Models
            </h2>
            <p>
              All persons depicted in photos or videos on this site are actors or models and not contractors listed on this site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              4. Mandatory Homeowner Disclaimer
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              {SITE_CONFIG.disclaimer}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

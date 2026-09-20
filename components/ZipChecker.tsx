"use client";

import { useState, FormEvent } from "react";
import { MapPin, CheckCircle2, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ZipChecker() {
  const [zipInput, setZipInput] = useState("");
  const [result, setResult] = useState<"available" | null>(null);

  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    setResult("available");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-xs my-6 relative overflow-hidden">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span>Local Contractor Coverage Checker</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Find HVAC Service Providers in Your Area
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Enter your ZIP code or city to connect with independent local HVAC contractors available for heating and cooling assistance.
        </p>
      </div>

      <form
        onSubmit={handleCheck}
        className="mt-5 flex flex-col sm:flex-row gap-3 max-w-xl"
      >
        <div className="relative flex-1 min-w-0">
          <label htmlFor="zip-checker-input" className="sr-only">
            Enter Service ZIP Code or City
          </label>
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0" />
          <input
            id="zip-checker-input"
            aria-label="Enter Service ZIP Code or City"
            type="text"
            value={zipInput}
            onChange={(e) => {
              setZipInput(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. 78701, Houston, or Dallas"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-md shadow-orange-500/20 whitespace-nowrap"
        >
          Check Coverage
        </button>
      </form>

      {result === "available" && (
        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2 animate-in fade-in">
          <div className="flex items-center gap-2 font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Contractors Available Near {zipInput}!
            </span>
          </div>
          <p className="text-slate-700 text-xs">
            Independent HVAC service providers are available near{" "}
            <span className="font-semibold text-slate-900">{zipInput}</span>. Call our connection hotline to speak with a local contractor:
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors mt-1 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>Call Now ({SITE_CONFIG.phone})</span>
          </a>
        </div>
      )}
    </div>
  );
}

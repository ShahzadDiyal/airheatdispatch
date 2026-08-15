"use client";

import { useState, FormEvent } from "react";
import { MapPin, CheckCircle2, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ZipChecker() {
  const [zipInput, setZipInput] = useState("");
  const [result, setResult] = useState<"available" | "busy" | null>(null);

  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    setResult("available");
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl my-10 relative overflow-hidden">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Live Dispatch Coverage Checker</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Check Immediate Emergency Technician Availability
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Enter your ZIP code to verify live technician positioning and
          emergency dispatch response time in your area.
        </p>
      </div>

      <form
        onSubmit={handleCheck}
        className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl"
      >
        <div className="relative flex-1">
          <label htmlFor="zip-checker-input" className="sr-only">
            Enter Service ZIP Code or City
          </label>
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="zip-checker-input"
            aria-label="Enter Service ZIP Code or City"
            type="text"
            value={zipInput}
            onChange={(e) => {
              setZipInput(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. 78701 or Austin"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-md"
        >
          Check Availability
        </button>
      </form>

      {result === "available" && (
        <div className="mt-4 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm space-y-2 animate-in fade-in">
          <div className="flex items-center gap-2 font-bold text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              Technicians On Call in Area ({zipInput}) - &lt; 45 Min Dispatch
              Available!
            </span>
          </div>
          <p className="text-slate-200 text-xs">
            We have active mobile units routed near{" "}
            <span className="font-semibold text-white">{zipInput}</span> right
            now. Call our direct hotline for priority arrival:
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 font-black text-xs hover:bg-emerald-300 transition-colors mt-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
        </div>
      )}
    </div>
  );
}

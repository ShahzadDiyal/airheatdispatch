"use client";

import { useState } from "react";
import { Calculator, ArrowRight, Sparkles, Check } from "lucide-react";
import BookingModal from "./BookingModal";
import { SITE_CONFIG } from "@/config/site";

export default function ServiceEstimator() {
  const [systemType, setSystemType] = useState("central-ac");
  const [issueType, setIssueType] = useState("not-cooling");
  const [homeSize, setHomeSize] = useState("1500-2500");
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Service Request Calculator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Instant HVAC Service Quote Request
        </h3>
        <p className="text-slate-300 text-sm mt-1">
          Select your system details to request an upfront flat-rate price quote before scheduling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-5">
          {/* System Type */}
          <fieldset>
            <legend className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
              1. Select HVAC System Type
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "central-ac", label: "Central AC" },
                { id: "heat-pump", label: "Heat Pump" },
                { id: "furnace", label: "Gas/Elec Furnace" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSystemType(item.id)}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    systemType === item.id
                      ? "bg-sky-500/20 border-sky-400 text-sky-300 shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Issue Type */}
          <fieldset>
            <legend className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
              2. What is the Primary Issue?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: "not-cooling", label: "Blowing Warm Air" },
                { id: "full-outage", label: "Complete System Failure" },
                { id: "strange-noise", label: "Loud Noise / Buzzing" },
                { id: "leak", label: "Water Leak / Frozen Coil" },
                { id: "maintenance", label: "Seasonal Tune-Up" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIssueType(item.id)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                    issueType === item.id
                      ? "bg-amber-400/20 border-amber-400 text-amber-300 shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Home Size */}
          <fieldset>
            <legend className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
              3. Home Size (Square Feet)
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "under-1500", label: "< 1,500 sq ft" },
                { id: "1500-2500", label: "1,500 - 2,500 sq ft" },
                { id: "2500-4000", label: "2,500+ sq ft" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHomeSize(item.id)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    homeSize === item.id
                      ? "bg-sky-500/20 border-sky-400 text-sky-300"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Quote Request Output Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
              <span>Upfront Flat-Rate Estimate</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Request Free Quote
            </div>
            <p className="text-xs text-slate-300 mt-2">
              Includes full technician diagnostic inspection. Diagnostic fee waived 100% upon repair approval.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Upfront flat-rate pricing guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No overtime fees for evenings or weekends</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1-Year parts & labor guarantee</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Request Free Quote ({SITE_CONFIG.phone})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

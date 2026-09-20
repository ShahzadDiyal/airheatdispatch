"use client";

import { useState } from "react";
import { Wrench, Phone, Check } from "lucide-react";
import BookingModal from "./BookingModal";
import { SITE_CONFIG } from "@/config/site";

export default function ServiceEstimator() {
  const [systemType, setSystemType] = useState("central-ac");
  const [issueType, setIssueType] = useState("not-cooling");
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden text-slate-900">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>HVAC Connection Assistant</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Find HVAC Help in Your Area
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Select your equipment and current system issue to connect with an independent local HVAC contractor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-5">
          {/* System Type */}
          <fieldset>
            <legend className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
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
                      ? "bg-blue-50 border-blue-500 text-blue-700 shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Issue Type */}
          <fieldset>
            <legend className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              2. What is the System Issue?
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: "not-cooling", label: "Blowing Warm Air" },
                { id: "full-outage", label: "Complete Outage" },
                { id: "strange-noise", label: "Unusual Noises" },
                { id: "leak", label: "Water Leak / Frozen Coil" },
                { id: "maintenance", label: "Seasonal Tune-Up" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIssueType(item.id)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                    issueType === item.id
                      ? "bg-orange-50 border-orange-500 text-orange-700 shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Action Call Box */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-md">
          <div>
            <div className="text-xs text-orange-400 font-bold mb-1">Direct Phone Match</div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Connect With a Provider
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Speak directly with an independent local HVAC contractor who services your zip code.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Independent local service contractors</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>24/7 phone connection hotline</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free connection service for homeowners</span>
            </div>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

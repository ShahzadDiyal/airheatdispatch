"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ShieldAlert, Sparkles, Check } from "lucide-react";
import BookingModal from "./BookingModal";

export default function ServiceEstimator() {
  const [systemType, setSystemType] = useState("central-ac");
  const [issueType, setIssueType] = useState("not-cooling");
  const [homeSize, setHomeSize] = useState("1500-2500");
  const [bookingOpen, setBookingOpen] = useState(false);

  // Price matrix calculation logic
  const calculateEstimate = () => {
    let baseMin = 89;
    let baseMax = 250;

    if (issueType === "not-cooling" || issueType === "not-heating") {
      baseMin = 140;
      baseMax = 420;
    } else if (issueType === "strange-noise") {
      baseMin = 95;
      baseMax = 320;
    } else if (issueType === "leak") {
      baseMin = 120;
      baseMax = 380;
    } else if (issueType === "maintenance") {
      baseMin = 79;
      baseMax = 149;
    } else if (issueType === "full-outage") {
      baseMin = 180;
      baseMax = 550;
    }

    if (systemType === "heat-pump") {
      baseMin += 30;
      baseMax += 50;
    }

    if (homeSize === "2500-4000") {
      baseMin += 20;
      baseMax += 60;
    } else if (homeSize === "4000+") {
      baseMin += 40;
      baseMax += 100;
    }

    return { min: baseMin, max: baseMax };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Cost Calculator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Instant HVAC Repair Estimate Calculator
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Select your system details to get an upfront flat-rate price range before booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-5">
          {/* System Type */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
              1. Select HVAC System Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "central-ac", label: "Central AC" },
                { id: "heat-pump", label: "Heat Pump" },
                { id: "furnace", label: "Gas/Elec Furnace" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSystemType(item.id)}
                  className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    systemType === item.id
                      ? "bg-sky-500/15 border-sky-500 text-sky-400 shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Issue Type */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
              2. What is the Primary Issue?
            </label>
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
                  onClick={() => setIssueType(item.id)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                    issueType === item.id
                      ? "bg-amber-500/15 border-amber-500 text-amber-300 shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

         
        </div>

        {/* Estimated Price Output */}
       
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

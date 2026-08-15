"use client";

import { useState, FormEvent } from "react";
import { X, CheckCircle2, Phone, Calendar, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
}

export default function BookingModal({ isOpen, onClose, defaultServiceSlug }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(defaultServiceSlug || "ac-repair");
  const [urgency, setUrgency] = useState("emergency");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-10 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 id="booking-modal-title" className="text-2xl font-black text-white">
              Service Request Received!
            </h2>
            <p className="text-sm text-slate-200">
              Our dispatch manager has received your HVAC service ticket. A certified technician will call <span className="text-amber-400 font-bold">{phone || SITE_CONFIG.phone}</span> within <span className="font-bold text-white">10 minutes</span> to confirm dispatch timing.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              Need immediate emergency help? Call our hotline right now:{" "}
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-amber-400 font-bold underline">
                Call {SITE_CONFIG.phone}
              </a>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-black text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Priority Dispatch</span>
              </div>
              <h2 id="booking-modal-title" className="text-2xl font-black text-white tracking-tight">
                Request Free HVAC Repair Quote
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Upfront flat-rate transparent quote. Zero obligation.
              </p>
            </div>

            {/* Urgency Selection */}
            <fieldset>
              <legend className="sr-only">Select Service Urgency</legend>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency("emergency")}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    urgency === "emergency"
                      ? "bg-amber-400/20 border-amber-400 text-amber-300 font-bold"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">24/7 Emergency</div>
                    <div className="text-[10px] text-slate-400">Under 60 Min Arrival</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency("scheduled")}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    urgency === "scheduled"
                      ? "bg-sky-500/20 border-sky-400 text-sky-300 font-bold"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <Calendar className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Schedule Appointment</div>
                    <div className="text-[10px] text-slate-400">Select Date & Time</div>
                  </div>
                </button>
              </div>
            </fieldset>

            {/* Select Service */}
            <div className="space-y-1.5">
              <label htmlFor="modal-service-select" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Select HVAC Service Type
              </label>
              <select
                id="modal-service-select"
                aria-label="Select HVAC Service Type"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400"
                required
              >
                {CORE_SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.priceLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="modal-full-name" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Full Name *
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-phone-number" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Phone Number *
                </label>
                <input
                  id="modal-phone-number"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="modal-street-address" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Service Street Address *
              </label>
              <input
                id="modal-street-address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main Street, Austin, TX"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="modal-issue-notes" className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Describe System Issue (Optional)
              </label>
              <textarea
                id="modal-issue-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. AC blowing warm air, strange rattling noise in furnace..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button with High Contrast */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Dispatching Request..." : "Request Free Repair Quote →"}
            </button>

            <div className="flex items-center justify-between text-xs text-slate-300 border-t border-slate-800 pt-3">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {SITE_CONFIG.licenseText}
              </span>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { X, CheckCircle2, Phone, Clock, ShieldAlert } from "lucide-react";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultServiceSlug,
}: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    defaultServiceSlug || "hvac",
  );
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
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white  rounded-2xl w-full max-w-lg shadow-ms overflow-hidden relative text-slate-900 my-4 sm:my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2
              id="booking-modal-title"
              className="text-xl sm:text-2xl font-bold text-slate-900"
            >
              Connection Request Submitted!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Thank you for contacting AirHeat Dispatch. An independent local HVAC contractor will contact you at{" "}
              <span className="text-blue-600 font-bold">
                {phone || SITE_CONFIG.phone}
              </span>{" "}
              to assist with your request.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50  text-xs text-slate-700 break-words">
              For immediate connection, call our 24/7 hotline:{" "}
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="text-orange-500 font-bold underline"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 space-y-4"
          >
            {/* Header */}
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50  text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>24/7 Homeowner Connection</span>
              </div>
              <h2
                id="booking-modal-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
              >
                Connect With a Local HVAC Provider
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Fill out your details below or call our hotline for direct phone matching.
              </p>
            </div>

            {/* Select Service */}
            <div className="space-y-1.5">
              <label
                htmlFor="modal-service-select"
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
              >
                Select HVAC Service Needed
              </label>
              <select
                id="modal-service-select"
                aria-label="Select HVAC Service Needed"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                required
              >
                {CORE_SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="modal-full-name"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                >
                  Full Name *
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="modal-phone-number"
                  className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
                >
                  Phone Number *
                </label>
                <input
                  id="modal-phone-number"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="modal-street-address"
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
              >
                City / Service ZIP Code *
              </label>
              <input
                id="modal-street-address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Austin, TX 78701"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="modal-issue-notes"
                className="text-xs font-bold text-slate-700 uppercase tracking-wider block"
              >
                System Issue (Optional)
              </label>
              <textarea
                id="modal-issue-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. AC blowing warm air, furnace not turning on..."
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting
                ? "Submitting Request..."
                : "Request Provider Connection →"}
            </button>

            <div className="flex flex-col xs:flex-row items-center justify-between gap-2 text-xs text-slate-600 border-t border-slate-200 pt-3">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                Independent Local Contractors
              </span>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="text-orange-500 font-bold hover:underline shrink-0"
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

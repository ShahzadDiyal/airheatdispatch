"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight, Loader2 } from "lucide-react";

interface SearchResult {
  zip: string;
  city: string;
  state: string;
  stateName: string;
  stateSlug: string;
  citySlug: string;
}

export default function ZipChecker() {
  const router = useRouter();
  const [zipInput, setZipInput] = useState("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!zipInput.trim() || zipInput.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/locations/search?q=${encodeURIComponent(zipInput.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.results || []);
          setIsOpen(data.results && data.results.length > 0);
        }
      } catch (err) {
        console.error("ZIP search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [zipInput]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLocation = (item: SearchResult) => {
    setIsOpen(false);
    router.push(`/ac-repair/${item.stateSlug}/${item.citySlug}`);
  };

  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    if (suggestions.length > 0) {
      handleSelectLocation(suggestions[0]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-2xl p-5 sm:p-8 shadow-xs my-6 relative overflow-hidden text-slate-900"
    >
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span>Local Area & ZIP Coverage Checker</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Find HVAC Service Providers in Your Area
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Enter your ZIP code or city to locate independent HVAC contractors available in your local community.
        </p>
      </div>

      <form onSubmit={handleCheck} className="mt-5 flex flex-col sm:flex-row gap-3 max-w-xl relative">
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
            onChange={(e) => setZipInput(e.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) setIsOpen(true);
            }}
            placeholder="e.g. 07001, Houston, or Dallas"
            className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
            required
            autoComplete="off"
          />
          {isLoading && (
            <Loader2 className="w-4 h-4 text-blue-600 absolute right-3 top-1/2 -translate-y-1/2 animate-spin shrink-0" />
          )}
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-xs shadow-orange-500/20 whitespace-nowrap"
        >
          Check Area
        </button>

        {/* Autocomplete Dropdown */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 max-h-60 overflow-y-auto p-2 space-y-1 divide-y divide-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Matching Cities & ZIP Codes:
            </div>
            {suggestions.map((item, idx) => (
              <button
                key={`zipcheck-${item.zip}-${item.citySlug}-${idx}`}
                type="button"
                onClick={() => handleSelectLocation(item)}
                className="w-full text-left flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-50 text-xs font-semibold text-slate-800 hover:text-blue-700 transition-colors group cursor-pointer"
              >
                <span className="flex items-center gap-2 truncate min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{item.city}, {item.state}</span>
                  {item.zip && (
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                      ZIP {item.zip}
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5 shrink-0 ml-2">
                  <span>View Hub</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </span>
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

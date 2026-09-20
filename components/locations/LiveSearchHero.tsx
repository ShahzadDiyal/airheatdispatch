"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

interface SearchResult {
  zip: string;
  city: string;
  state: string;
  stateName: string;
  stateSlug: string;
  citySlug: string;
}

export default function LiveSearchHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced API search
  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      setNotFoundMessage(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/locations/search?q=${encodeURIComponent(query.trim())}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.results || []);
          setIsOpen(true);
          setNotFoundMessage((data.results || []).length === 0);
        }
      } catch (err) {
        console.error("Location search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
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
    setQuery(`${item.city}, ${item.state} ${item.zip ? `(${item.zip})` : ""}`);
    // Redirect to local city hub page for AC repair
    router.push(`/ac-repair/${item.stateSlug}/${item.citySlug}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (suggestions.length > 0) {
      // Automatically redirect to the top matching autocomplete location
      handleSelectLocation(suggestions[0]);
    } else {
      setNotFoundMessage(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/90 relative text-slate-900"
    >
      <form onSubmit={handleSubmit} className="relative">
        <label htmlFor="hero-live-search-input" className="sr-only">
          Search ZIP Code or City Across 50 States
        </label>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1 min-w-0">
            <MapPin className="w-4 h-4 text-orange-500 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0" />
            <input
              id="hero-live-search-input"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setNotFoundMessage(false);
              }}
              onFocus={() => {
                if (suggestions.length > 0) setIsOpen(true);
              }}
              placeholder="Enter ZIP Code or City (e.g. 07001, Avenel, Houston)..."
              className="w-full pl-10 pr-9 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 font-medium transition-colors"
              required
              autoComplete="off"
            />
            {isLoading && (
              <Loader2 className="w-4 h-4 text-blue-600 absolute right-3 top-1/2 -translate-y-1/2 animate-spin shrink-0" />
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-orange-500/25 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Search className="w-4 h-4 text-white shrink-0" />
            <span>Search Area</span>
          </button>
        </div>

        {/* Live Auto-Suggest Dropdown */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 max-h-72 overflow-y-auto p-2 space-y-1 divide-y divide-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Select Your Area / ZIP Code:
            </div>
            {suggestions.map((item, idx) => (
              <button
                key={`${item.zip}-${item.citySlug}-${idx}`}
                type="button"
                onClick={() => handleSelectLocation(item)}
                className="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-blue-50 text-xs font-semibold text-slate-800 hover:text-blue-700 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate min-w-0">
                    <span className="font-bold text-slate-900 group-hover:text-blue-700">
                      {item.city}, {item.state}
                    </span>
                    {item.zip && (
                      <span className="ml-1.5 text-[11px] font-normal text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        ZIP {item.zip}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[10px] font-bold text-blue-600 flex items-center gap-1 shrink-0 ml-2">
                  <span>Go to Area Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Not Found Alert */}
        {notFoundMessage && query.length >= 2 && !isLoading && (
          <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 z-50 shadow-lg">
            No specific ZIP or city match found for &ldquo;{query}&rdquo;. Try typing a ZIP code like <strong>07001</strong> or city like <strong>Houston</strong>.
          </div>
        )}
      </form>

      {/* Trust pill */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex-wrap gap-2">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>All 50 US States & 23,700+ ZIP Codes Covered</span>
        </span>
        <span className="text-emerald-600 font-bold flex items-center gap-1">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Instant Autocomplete & Area Hubs</span>
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo, FormEvent } from "react";
import Link from "next/link";
import { Search, MapPin, Phone, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo";
import { ALL_STATES_DATA } from "@/config/states";

export default function LiveSearchHero() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState<string | null>(null);

  // Flatten all major cities across all 50 states for instant search matching
  const allCitiesList = useMemo(() => {
    const list: { cityName: string; stateName: string; stateSlug: string; citySlug: string }[] = [];
    const activeStates = Object.values(ALL_STATES_DATA);
    for (const st of activeStates) {
      for (const city of st.majorCities) {
        list.push({
          cityName: city.name,
          stateName: st.stateName,
          stateSlug: st.stateSlug,
          citySlug: city.slug,
        });
      }
    }
    return list;
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase().trim();
    return allCitiesList
      .filter(
        (c) =>
          c.cityName.toLowerCase().includes(q) ||
          c.stateName.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query, allCitiesList]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchedLocation(query.trim());
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/90 relative text-slate-900">
      <form onSubmit={handleSearch} className="relative">
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
                setSearchedLocation(null);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Enter ZIP Code or City (e.g. 78701, Austin, Miami)..."
              className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white placeholder:text-slate-400 font-medium transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-orange-500/25 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Search className="w-4 h-4 text-white shrink-0" />
            <span>Find Coverage</span>
          </button>
        </div>

        {/* Live Auto-Suggest Dropdown */}
        {isFocused && filteredSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 max-h-60 overflow-y-auto p-1.5 space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Matching City Service Hubs:
            </div>
            {filteredSuggestions.map((item, idx) => (
              <Link
                key={idx}
                href={`/hvac/${item.stateSlug}/${item.citySlug}`}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 text-xs font-semibold text-slate-800 hover:text-blue-700 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{item.cityName}, {item.stateName}</span>
                </span>
                <span className="text-[10px] text-blue-600 flex items-center gap-0.5">
                  <span>View Hub</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </form>

      {/* Coverage Found Box */}
      {searchedLocation && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2.5 animate-in fade-in">
          <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Independent Contractors Available Near &ldquo;{searchedLocation}&rdquo;</span>
          </div>
          <p className="text-slate-700 text-xs leading-relaxed">
            Independent local HVAC service providers are available for emergency air conditioning and heating repair near <strong className="text-slate-900">&ldquo;{searchedLocation}&rdquo;</strong>. Call our 24/7 desk to get connected:
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 fill-white shrink-0" />
            <span>Call Now ({SITE_CONFIG.phone})</span>
          </a>
        </div>
      )}

      {/* Trust pill */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex-wrap gap-2">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>All 50 US States & 20,000+ ZIP Codes Covered</span>
        </span>
        <span className="text-emerald-600 font-bold flex items-center gap-1">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Hotline Active (24/7)</span>
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import { ALL_STATES_DATA } from "@/config/states";
import {
  Phone,
  Flame,
  Snowflake,
  Menu,
  X,
  ChevronDown,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStates = Object.values(ALL_STATES_DATA);
  const texasCities = ALL_STATES_DATA.texas?.majorCities || [];
  const alabamaCities = ALL_STATES_DATA.alabama?.majorCities || [];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-0">
          {/* Left — status pill */}
          <div className="flex items-center gap-3 min-w-0 overflow-hidden">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium shrink-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden xs:inline">24/7 Homeowner Connection Desk Active</span>
              <span className="xs:hidden">24/7 Active</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              Free Connection Service for Homeowners
            </span>
          </div>

          {/* Right — clock + phone */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span className="hidden lg:inline">24/7 Hotline Connection</span>
            </span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="text-orange-400 hover:text-orange-300 font-bold transition-colors flex items-center gap-1 shrink-0"
            >
              <Phone className="w-3 h-3 fill-orange-400 shrink-0" />
              <span className="hidden sm:inline">{SITE_CONFIG.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b border-slate-200 ${
          isScrolled ? "shadow-xs py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href="/"
            rel="dofollow"
            className="flex items-center gap-2 group shrink-0 min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 p-0.5 shadow-xs shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative">
                <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 absolute -translate-x-1 -translate-y-1" />
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 absolute translate-x-1 translate-y-1 opacity-90" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-1 truncate">
                Air<span className="text-blue-600">Heat</span>{" "}
                <span className="text-slate-900">Dispatch</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase truncate">
                Homeowner Connection Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label="Main Header Navigation"
          >
            <Link
              href="/"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/services"
                rel="dofollow"
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                HVAC Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform shrink-0" />
              </Link>

              <div className="absolute top-full left-0 w-72 xl:w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-2 group-hover:translate-y-0 max-h-[70vh] overflow-y-auto">
                {CORE_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    rel="dofollow"
                    className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                      {s.name}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {s.shortDesc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/service-areas"
                rel="dofollow"
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                Locations
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform shrink-0" />
              </Link>

              <div className="absolute top-full left-0 w-80 xl:w-96 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-2 group-hover:translate-y-0 max-h-[75vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {activeStates.map((st) => (
                    <Link
                      key={st.stateSlug}
                      href={`/hvac/${st.stateSlug}`}
                      className="block p-2 rounded-xl bg-blue-50 hover:bg-blue-100/70 transition-colors"
                    >
                      <div className="text-[11px] font-bold text-blue-700 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{st.stateName} Hub →</span>
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5 truncate">
                        {st.majorCities.length} Major Cities
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div>
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Texas Metros:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {texasCities.slice(0, 6).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/hvac/texas/${city.slug}`}
                          className="p-1 rounded text-[11px] text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium truncate"
                        >
                          {city.name}, TX
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">Alabama Cities:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {alabamaCities.slice(0, 6).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/hvac/alabama/${city.slug}`}
                          className="p-1 rounded text-[11px] text-slate-600 hover:text-emerald-700 hover:bg-slate-50 transition-colors font-medium truncate"
                        >
                          {city.name}, AL
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/how-it-works"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              How It Works
            </Link>

            <Link
              href="/faqs"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              FAQs
            </Link>

            <Link
              href="/about"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              About
            </Link>

            <Link
              href="/contact"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs xl:text-sm transition-all hover:scale-[1.02] shadow-xs shadow-orange-500/20 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-white shrink-0" />
              <span>Call ({SITE_CONFIG.phone})</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
            <div className="space-y-0.5">
              <Link
                href="/"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                Home
              </Link>
              <Link
                href="/services"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:bg-slate-100 rounded-lg"
              >
                All HVAC Services →
              </Link>
              {CORE_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  rel="dofollow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-5 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                >
                  {s.name}
                </Link>
              ))}
              <div className="pt-1">
                <Link
                  href="/service-areas"
                  rel="dofollow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-bold text-blue-600 uppercase tracking-wider hover:bg-slate-100 rounded-lg"
                >
                  Service Areas Directory →
                </Link>
              </div>
              {activeStates.map((st) => (
                <Link
                  key={st.stateSlug}
                  href={`/hvac/${st.stateSlug}`}
                  rel="dofollow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-5 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                >
                  {st.stateName} Statewide Hub
                </Link>
              ))}
              <Link
                href="/how-it-works"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                How It Works
              </Link>
              <Link
                href="/faqs"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                FAQs
              </Link>
              <Link
                href="/about"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-100 text-sm"
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-500/20"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span>Call Now ({SITE_CONFIG.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

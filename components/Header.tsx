"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, TEXAS_CITIES_DATA } from "@/config/site";
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
  User,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              24/7 Homeowner Connection Desk Active
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Free Connection Service for Homeowners
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              24/7 Hotline Connection
            </span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="text-orange-400 hover:text-orange-300 font-bold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 fill-orange-400" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main White Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b border-slate-200 ${
          isScrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            rel="dofollow"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative">
                <Snowflake className="w-5 h-5 text-sky-400 absolute -translate-x-1 -translate-y-1" />
                <Flame className="w-5 h-5 text-orange-500 absolute translate-x-1 translate-y-1 opacity-90" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-1">
                Air<span className="text-blue-600">Heat</span>{" "}
                <span className="text-slate-900">Dispatch</span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Homeowner Connection Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7"
            aria-label="Main Header Navigation"
          >
            <Link
              href="/"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/services"
                rel="dofollow"
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                HVAC Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-2 group-hover:translate-y-0">
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
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                Locations
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/hvac/texas"
                  className="block p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/70 transition-colors mb-2"
                >
                  <div className="text-xs font-bold text-blue-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    Texas Statewide Hub →
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Explore 10 major Texas metropolitan regions
                  </div>
                </Link>
                <div className="grid grid-cols-2 gap-1 pt-1 border-t border-slate-100">
                  {TEXAS_CITIES_DATA.map((city) => (
                    <Link
                      key={city.citySlug}
                      href={`/hvac/texas/${city.citySlug}`}
                      className="p-1.5 rounded-lg text-xs text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium"
                    >
                      {city.cityName}, TX
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/how-it-works"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="/faqs"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/about"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              rel="dofollow"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Bright Orange Call CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs xl:text-sm transition-all hover:scale-[1.02] shadow-md shadow-orange-500/20 shrink-0"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call ({SITE_CONFIG.phone})</span>
            </a>
            <div className="p-2 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
              >
                Home
              </Link>
              <Link
                href="/services"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider hover:bg-slate-100"
              >
                All HVAC Services →
              </Link>
              {CORE_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  rel="dofollow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider hover:bg-slate-100 pt-2"
              >
                Texas & Service Areas →
              </Link>
              <Link
                href="/how-it-works"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
              >
                How It Works
              </Link>
              <Link
                href="/faqs"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
              >
                FAQs
              </Link>
              <Link
                href="/about"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-slate-800 hover:bg-slate-100"
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
                <Phone className="w-4 h-4 fill-white" />
                Call Now ({SITE_CONFIG.phone})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

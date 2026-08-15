"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import { Phone, Flame, Snowflake, Menu, X, ChevronRight, ShieldCheck, Clock } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              24/7 Emergency Dispatch Active
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-sky-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              {SITE_CONFIG.licenseText}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Response Time: &lt; 60 Mins
            </span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3"
            : "bg-slate-900 border-b border-slate-800 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" rel="dofollow" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-amber-500 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative">
                <Snowflake className="w-5 h-5 text-sky-400 absolute -translate-x-1 -translate-y-1" />
                <Flame className="w-5 h-5 text-amber-500 absolute translate-x-1 translate-y-1 opacity-90" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1">
                Air<span className="text-sky-400">Heat</span> <span className="text-amber-500 font-black">Dispatch</span>
              </span>
              <span className="block text-[10px] font-medium text-slate-300 tracking-wider uppercase">
                HVAC Service & Repair
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Header Navigation">
            <Link
              href="/"
              rel="dofollow"
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              Home
            </Link>

            <div className="relative group py-2">
              <Link
                href="/services"
                rel="dofollow"
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                Services
                <ChevronRight className="w-3.5 h-3.5 rotate-90 group-hover:rotate-[270deg] transition-transform" />
              </Link>

              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 transform translate-y-2 group-hover:translate-y-0">
                {CORE_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    rel="dofollow"
                    className="block p-3 rounded-lg hover:bg-slate-800 transition-colors group/item"
                  >
                    <div className="text-sm font-bold text-slate-100 group-hover/item:text-amber-400 transition-colors">
                      {s.name}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{s.shortDesc}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/faqs"
              rel="dofollow"
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              HVAC FAQs
            </Link>

            <Link
              href="/why-us"
              rel="dofollow"
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              Why Choose Us
            </Link>

            <Link
              href="/about"
              rel="dofollow"
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              rel="dofollow"
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs xl:text-sm transition-all hover:scale-[1.02] shadow-sm shrink-0"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Hotline: {SITE_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-white text-slate-950 font-black text-xs xl:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0"
            >
              Request Free Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              rel="dofollow"
              className="px-3 py-2 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5"
              aria-label={`Call HVAC Service at ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <Link
                href="/"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
              >
                Home Page
              </Link>
              <Link
                href="/services"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-bold text-amber-400 uppercase tracking-wider hover:bg-slate-800"
              >
                All HVAC Services Catalog →
              </Link>
              {CORE_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  rel="dofollow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                href="/faqs"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
              >
                HVAC FAQs
              </Link>
              <Link
                href="/why-us"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
              >
                Why Choose Us
              </Link>
              <Link
                href="/about"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                rel="dofollow"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
              >
                Contact & Dispatch
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-400 text-slate-950 font-black text-sm"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                Call Hotline: {SITE_CONFIG.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3 rounded-lg bg-slate-100 text-slate-950 font-black text-sm text-center"
              >
                Request Free Repair Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
}

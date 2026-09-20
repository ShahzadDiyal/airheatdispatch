import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES, TEXAS_CITIES_DATA } from "@/config/site";
import { Phone, Mail, Clock, Snowflake, Flame, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" rel="dofollow" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 p-0.5 shadow-md shadow-blue-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative">
                  <Snowflake className="w-4 h-4 text-sky-400 absolute -translate-x-0.5 -translate-y-0.5" />
                  <Flame className="w-4 h-4 text-orange-500 absolute translate-x-0.5 translate-y-0.5" />
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Air<span className="text-blue-500">Heat</span>{" "}
                <span className="text-white">Dispatch</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Free homeowner connection service helping homeowners quickly find and
              connect with independent local HVAC contractors for heating,
              air conditioning, and system repairs.
            </p>

            <div className="space-y-3 pt-1 text-sm">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all shadow-md shadow-orange-500/20 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span className="truncate">Call {SITE_CONFIG.phone} (24/7)</span>
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <div className="p-2 rounded-lg bg-slate-900 text-slate-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{SITE_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase">
              HVAC Services
            </h3>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    rel="dofollow"
                    className="hover:text-orange-400 transition-colors block py-0.5 text-slate-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  rel="dofollow"
                  className="text-orange-400 font-bold hover:underline block pt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Texas Cities */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase">
              Texas Locations
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  href="/hvac/texas"
                  className="text-blue-400 font-bold hover:underline block"
                >
                  Texas Statewide Hub
                </Link>
              </li>
              {TEXAS_CITIES_DATA.slice(0, 6).map((city) => (
                <li key={city.citySlug}>
                  <Link
                    href={`/hvac/texas/${city.citySlug}`}
                    rel="dofollow"
                    className="hover:text-orange-400 transition-colors block py-0.5"
                  >
                    {city.cityName} HVAC
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-orange-400 font-bold hover:underline block pt-1"
                >
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase">
              Company & Policy
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24/7 Phone Connection</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Independent HVAC Providers</span>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/how-it-works" className="hover:text-orange-400 transition-colors block py-0.5">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-orange-400 transition-colors block py-0.5">
                  HVAC FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors block py-0.5">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-orange-400 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* PROMINENT REQUIRED LEGAL DISCLAIMER */}
        <div className="py-6 border-b border-slate-900">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-[10px] sm:text-xs text-slate-400 leading-relaxed">
            <strong className="text-white block mb-1">
              Important Homeowner Disclaimer:
            </strong>
            {SITE_CONFIG.disclaimer}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/sitemap.xml"
              rel="dofollow"
              className="hover:text-orange-400 transition-colors"
            >
              XML Sitemap
            </Link>
            <Link
              href="/llms.txt"
              rel="dofollow"
              className="hover:text-orange-400 transition-colors"
            >
              llms.txt
            </Link>
            <Link
              href="/privacy-policy"
              rel="dofollow"
              className="hover:text-orange-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              rel="dofollow"
              className="hover:text-orange-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

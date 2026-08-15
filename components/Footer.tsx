import Link from "next/link";
import { SITE_CONFIG, CORE_SERVICES } from "@/config/site";
import { Phone, Mail, MapPin, Shield, Award, Clock, Snowflake, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" rel="dofollow" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-amber-500 p-0.5 shadow-lg shadow-sky-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative">
                  <Snowflake className="w-4 h-4 text-sky-400 absolute -translate-x-0.5 -translate-y-0.5" />
                  <Flame className="w-4 h-4 text-amber-500 absolute translate-x-0.5 translate-y-0.5" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Air<span className="text-sky-400">Heat</span> <span className="text-amber-500">Dispatch</span>
              </span>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Certified local HVAC contractor specializing in emergency 24/7 air conditioning repair, heating and furnace diagnostics, seasonal maintenance tune-ups, and indoor air quality solutions.
            </p>

            <div className="space-y-2.5 pt-2 text-sm">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                rel="dofollow"
                className="flex items-center gap-3 text-amber-400 font-bold hover:text-amber-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call Hotline: {SITE_CONFIG.phone} (24/7 Dispatch)</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{SITE_CONFIG.email}</span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">Core HVAC Services</h3>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    rel="dofollow"
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  rel="dofollow"
                  className="text-amber-400 font-bold hover:underline block pt-1"
                >
                  View All {CORE_SERVICES.length} Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Directory */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">Company & Info</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/faqs" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  HVAC FAQs & Direct Answers
                </Link>
              </li>
              <li>
                <Link href="/why-us" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/about" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/contact" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  Contact & Emergency Hotline
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" rel="dofollow" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Badges & Hours */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide">License & Hours</h3>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>Open 24/7 / 365 Days</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>{SITE_CONFIG.licenseText}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>EPA 608 Universal Certified</span>
              </div>
            </div>
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">Need emergency repair?</span> Call <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-amber-400 font-bold underline">{SITE_CONFIG.phone}</a>.
            </div>
          </div>
        </div>

        {/* Bottom Bar & Dofollow Links */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved. 100% Technical SEO & Search Console Ready.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/sitemap.xml" rel="dofollow" className="hover:text-amber-400 transition-colors">
              XML Sitemap
            </Link>
            <Link href="/llms.txt" rel="dofollow" className="hover:text-amber-400 transition-colors">
              llms.txt (AI Knowledge)
            </Link>
            <Link href="/privacy-policy" rel="dofollow" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" rel="dofollow" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

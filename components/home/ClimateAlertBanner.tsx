import { Flame, Snowflake, Clock, Phone, AlertTriangle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo";

interface ClimateAlertBannerProps {
  stateName?: string;
  cityName?: string;
  type?: "heatwave" | "freeze" | "general";
}

export default function ClimateAlertBanner({
  stateName,
  cityName,
  type = "general",
}: ClimateAlertBannerProps) {
  const isHeatwave = type === "heatwave" || (stateName && ["Texas", "Florida", "Arizona", "California", "Georgia", "Louisiana"].includes(stateName));
  const isFreeze = type === "freeze" || (stateName && ["Alaska", "Minnesota", "Illinois", "Colorado", "Michigan", "Wisconsin", "North Dakota"].includes(stateName));

  const locationLabel = cityName && stateName ? `${cityName}, ${stateName}` : stateName ? stateName : "Nationwide";

  if (isHeatwave) {
    return (
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-amber-400/30 my-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs shrink-0 mt-0.5 sm:mt-0">
              <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-black/20 text-yellow-200">
                  High Heat Advisory
                </span>
                <span className="text-xs font-bold text-amber-100">{locationLabel} Weather Alert</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                Extreme Summer Heat Strain on Air Conditioning Systems
              </h4>
              <p className="text-xs text-amber-100/90 leading-snug line-clamp-2">
                High ambient temperatures increase compressor overload risks in {locationLabel}. Independent AC technicians are available 24/7 for phone matching.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-orange-600 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] shrink-0 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-orange-600 shrink-0" />
            <span>Call Hotline ({SITE_CONFIG.phone})</span>
          </a>
        </div>
      </div>
    );
  }

  if (isFreeze) {
    return (
      <div className="bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-800 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-sky-400/30 my-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs shrink-0 mt-0.5 sm:mt-0">
              <Snowflake className="w-5 h-5 text-sky-200 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-black/20 text-sky-200">
                  Hard Freeze Warning
                </span>
                <span className="text-xs font-bold text-sky-100">{locationLabel} Winter Alert</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                Sub-Zero Temperature Front & Furnace Outage Coverage
              </h4>
              <p className="text-xs text-sky-100/90 leading-snug line-clamp-2">
                Freezing cold fronts increase igniter and limit switch failures in {locationLabel}. Independent heating contractors are on call 24/7.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            rel="dofollow"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] shrink-0 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-blue-700 shrink-0" />
            <span>Call Hotline ({SITE_CONFIG.phone})</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 sm:p-5 shadow-md my-6 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 shrink-0 mt-0.5 sm:mt-0">
            <Clock className="w-5 h-5 text-orange-400" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                24/7 Desk Active
              </span>
              <span className="text-xs font-bold text-slate-300">{locationLabel} Service Desk</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Instant Phone Matching with Independent Local HVAC Technicians
            </h4>
            <p className="text-xs text-slate-400 leading-snug">
              Need immediate assistance for AC or furnace issues? Call our connection line to speak with a local contractor.
            </p>
          </div>
        </div>

        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          rel="dofollow"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] shrink-0 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
          <span>Call ({SITE_CONFIG.phone})</span>
        </a>
      </div>
    </div>
  );
}

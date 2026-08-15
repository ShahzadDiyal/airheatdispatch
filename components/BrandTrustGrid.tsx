import { ShieldCheck, Award } from "lucide-react";

export default function BrandTrustGrid() {
  const brands = [
    { name: "Carrier", desc: "Factory Certified Partner" },
    { name: "Trane", desc: "Authorized Inverter Specialist" },
    { name: "Lennox", desc: "Premier Dealer OEM Parts" },
    { name: "Rheem", desc: "Certified Heating & Cooling" },
    { name: "Daikin", desc: "VRV & Mini-Split Certified" },
    { name: "Goodman", desc: "Full Line Diagnostics" },
    { name: "York", desc: "Commercial & Residential" },
    { name: "Bryant", desc: "Evolution System Experts" },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-3 md:p-6 sm:p-10 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Universal Brand Compatibility</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            We Repair & Service All Major HVAC Brands
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Our technicians carry genuine OEM replacement parts for fast, single-visit repairs.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl shrink-0">
          <ShieldCheck className="w-4 h-4" />
          <span>EPA 608 Universal Certified</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-center hover:border-sky-500/40 transition-colors group"
          >
            <div className="text-lg font-black text-white group-hover:text-sky-400 transition-colors">
              {brand.name}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">{brand.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

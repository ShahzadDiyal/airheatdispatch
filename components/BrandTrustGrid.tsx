import { Wrench, ShieldCheck } from "lucide-react";

export default function BrandTrustGrid() {
  const brands = [
    { name: "Carrier", desc: "Central Air & Furnaces" },
    { name: "Trane", desc: "Heat Pumps & Air Handlers" },
    { name: "Lennox", desc: "High-Efficiency HVAC" },
    { name: "Rheem", desc: "Heating & Cooling Units" },
    { name: "Daikin", desc: "Inverter Heat Pumps" },
    { name: "Goodman", desc: "Residential AC & Heating" },
    { name: "York", desc: "Split Systems & Packaged Units" },
    { name: "Bryant", desc: "Cooling & Heating Systems" },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 my-8 shadow-xs">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Universal Brand Service Compatibility</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Independent Contractors Service All Major HVAC Brands
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Local providers assist homeowners with troubleshooting, maintenance, and repair for all leading manufacturer brands.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl shrink-0">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Independent HVAC Providers</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-center hover:border-blue-400 transition-colors group"
          >
            <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {brand.name}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{brand.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

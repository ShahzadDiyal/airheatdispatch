import { UserCheck, PhoneCall, Wrench, Shield } from "lucide-react";

export default function TrustGuarantees() {
  const benefits = [
    {
      icon: PhoneCall,
      title: "24/7 Call Line",
      titleColor: "text-slate-900",
      desc: "Direct phone matching with local contractors anytime day or night.",
    },
    {
      icon: UserCheck,
      title: "Independent",
      titleColor: "text-slate-900",
      desc: "Vetted independent local HVAC service contractors in your area.",
    },
    {
      icon: Shield,
      title: "Free Service for Homeowners",
      titleColor: "text-slate-900",
      desc: "Our connection service helps homeowners find local providers at no cost.",
    },
    {
      icon: Wrench,
      title: "Full HVAC Coverage",
      titleColor: "text-slate-900",
      desc: "Assistance for central AC, gas/electric furnaces, and heat pumps.",
    },
  ];

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2.5 relative hover:border-blue-400 transition-colors shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className={`text-sm font-bold leading-snug ${item.titleColor}`}>{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { ShieldCheck, DollarSign, Clock, ThumbsUp } from "lucide-react";

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: DollarSign,
      title: "100% Flat-Rate Upfront Pricing",
      desc: "No hidden charges, trip fees, or overtime surprises. You review and sign off on the exact repair price before work starts.",
    },
    {
      icon: Clock,
      title: "On-Time Dispatch Guarantee",
      desc: "We respect your schedule. If our technician arrives outside our agreed 60-minute window, we credit $50 towards your service bill.",
    },
    {
      icon: ShieldCheck,
      title: "1-Year Parts & Labor Protection",
      desc: "Every component we replace is backed by our full 365-day warranty. If it fails within 1 year, we replace it 100% free.",
    },
    {
      icon: ThumbsUp,
      title: "Cold / Hot Air Comfort Guarantee",
      desc: "We test subcooling, airflow CFM, and temperature splits to verify your system is cooling or heating to spec before leaving.",
    },
  ];

  return (
    <div className="my-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Our Unconditional Customer Guarantees
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Designed to give you 100% peace of mind on every repair visit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-3 md:p-6 space-y-3 relative hover:border-sky-500/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

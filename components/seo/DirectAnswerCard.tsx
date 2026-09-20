import { HelpCircle, CheckCircle2 } from "lucide-react";

interface DirectAnswerCardProps {
  questionTitle: string;
  directAnswer: string;
  keyPoints?: string[];
}

export default function DirectAnswerCard({
  questionTitle,
  directAnswer,
  keyPoints,
}: DirectAnswerCardProps) {
  return (
    <div className="bg-blue-50/70 rounded-2xl p-5 sm:p-8 shadow-xs relative overflow-hidden my-8">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="p-2.5 sm:p-3 rounded-2xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-xs shadow-blue-500/20">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="space-y-3 flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Direct Answer & Summary</span>
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {questionTitle}
          </h3>

          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
            {directAnswer}
          </p>

          {keyPoints && keyPoints.length > 0 && (
            <div className="pt-3 border-t border-blue-200/80">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-2">
                Key Points Summary:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {keyPoints.map((pt, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

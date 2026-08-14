import { Sparkles, CheckCircle2 } from "lucide-react";

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
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-xl my-8 relative overflow-hidden">
      <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>AEO Direct Answer Summary</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
        {questionTitle}
      </h3>

      {/* 30-50 Word Direct Answer Snippet Block */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-sky-500/20 text-slate-200 text-base leading-relaxed font-medium mb-4">
        {directAnswer}
      </div>

      {keyPoints && keyPoints.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          {keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

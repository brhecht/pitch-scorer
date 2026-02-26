import React from 'react';
import { Link } from 'react-router-dom';
import { useScores } from '../context/ScoreContext';
import { AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';

const Results = () => {
  const { calculateResults } = useScores();
  const { percentage, weakestLinks } = calculateResults();

  let grade = '';
  let color = '';
  let barColor = '';

  if (percentage >= 80) {
    grade = 'Investable';
    color = 'text-emerald-400';
    barColor = 'bg-emerald-500';
  } else if (percentage >= 60) {
    grade = 'Promising';
    color = 'text-blue-400';
    barColor = 'bg-blue-500';
  } else {
    grade = 'Needs Work';
    color = 'text-amber-400';
    barColor = 'bg-amber-500';
  }

  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Investment Readiness</h2>
        <div className="relative pt-6">
           <div className="text-7xl font-black tracking-tighter text-white mb-2 font-mono">
             {percentage}%
           </div>
           <div className={`text-2xl font-bold uppercase tracking-widest ${color}`}>
             {grade}
           </div>
        </div>
      </div>

      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl space-y-8 backdrop-blur-sm">
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium text-slate-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden shadow-inner">
            <div
                className={`h-4 rounded-full transition-all duration-1000 ease-out shadow-lg ${barColor}`}
                style={{ width: `${percentage}%` }}
            ></div>
            </div>
        </div>

        <div className="pt-6 border-t border-slate-700">
           <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
             <AlertTriangle className="text-amber-400" />
             Weakest Link{weakestLinks.length > 1 ? 's' : ''}
           </h3>
           <div className="grid grid-cols-1 gap-4">
             {weakestLinks.map(link => (
               <div key={link} className="bg-slate-900/80 p-5 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                 <div className="font-bold text-lg text-white mb-1">{link}</div>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Investors will scrutinize your {link.toLowerCase()}.
                   Focus on de-risking this area before your next pitch to improve your odds.
                 </p>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/assessment"
          className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white transition-colors border border-transparent hover:border-slate-700 rounded-lg"
        >
          <RotateCcw className="w-4 h-4" />
          Retake Assessment
        </Link>
      </div>
    </div>
  );
};

export default Results;

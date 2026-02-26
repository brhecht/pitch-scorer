import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart3, Target, TrendingUp } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 space-y-12">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Is Your Startup Investable?
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Get an honest assessment of your startup's readiness for venture capital.
          Rate your Market, Team, Product, Traction, and Vision to see where you stand.
        </p>

        <div className="pt-8">
          <Link
            to="/assessment"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80 group"
          >
            Start Assessment
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl pt-12">
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
          <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Scoring</h3>
          <p className="text-slate-400">Evaluate 5 key pillars that investors scrutinize.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
          <Target className="w-10 h-10 text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Identify Weaknesses</h3>
          <p className="text-slate-400">Pinpoint exactly what's holding you back from funding.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Prepare to Pitch</h3>
          <p className="text-slate-400">Walk into meetings knowing your strengths.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

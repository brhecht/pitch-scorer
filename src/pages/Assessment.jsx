import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScores } from '../context/ScoreContext';

const CategorySlider = ({ label, value, onChange, description }) => {
  return (
    <div className="space-y-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700 transition-all hover:border-slate-600">
      <div className="flex justify-between items-center">
        <label className="text-lg font-semibold text-white">{label}</label>
        <span className="text-2xl font-bold text-blue-400 font-mono">{value}</span>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400"
      />
      <div className="flex justify-between text-xs text-slate-500 uppercase tracking-wider font-semibold">
        <span>Weak</span>
        <span>Strong</span>
      </div>
    </div>
  );
};

const Assessment = () => {
  const { scores, updateScore } = useScores();
  const navigate = useNavigate();

  const categories = [
    { name: 'Market', description: 'Size, growth rate, and timing of the market opportunity.' },
    { name: 'Team', description: 'Experience, skills, and completeness of the founding team.' },
    { name: 'Product', description: 'Product-market fit, differentiation, and defensibility.' },
    { name: 'Traction', description: 'User growth, revenue, partnerships, and engagement.' },
    { name: 'Vision', description: 'Long-term potential, ambition, and narrative.' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">Rate Your Startup</h2>
        <p className="text-slate-400">Be honest. Investors will be.</p>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => (
          <CategorySlider
            key={cat.name}
            label={cat.name}
            description={cat.description}
            value={scores[cat.name]}
            onChange={(val) => updateScore(cat.name, val)}
          />
        ))}
      </div>

      <div className="pt-6 flex justify-center">
        <button
          onClick={() => navigate('/results')}
          className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-900/30"
        >
          View Analysis
        </button>
      </div>
    </div>
  );
};

export default Assessment;

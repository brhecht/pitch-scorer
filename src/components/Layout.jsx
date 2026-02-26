import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <header className="border-b border-slate-800 backdrop-blur-sm sticky top-0 z-50 bg-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            Founder Pitch Scorer
          </Link>
          <nav>
             {/* Optional nav items */}
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-slate-800 mt-12 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Founder Pitch Scorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

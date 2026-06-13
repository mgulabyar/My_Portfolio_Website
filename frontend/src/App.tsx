import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark px-4 selection:bg-brand-orange selection:text-white relative overflow-hidden">
      {/* Starry glowing gradient overlay background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-brand-dark to-brand-dark -z-10"></div>
      
      <div className="text-center max-w-2xl z-10">
        {/* Dynamic Brand Logo Section */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-pulse">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-brand-orange/20">
            &#123;Y&#125;
          </div>
          <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-brand-orange bg-clip-text text-transparent">
            YarDev<span className="text-brand-orange">.</span>
          </span>
        </div>

        {/* Dynamic Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-4">
          Welcome to <span className="text-brand-orange">NovaStack Engine</span>
        </h1>
        
        <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto">
          Enterprise-grade portfolio and dynamic agency hub is successfully initialized with React, Vite, TypeScript, and Tailwind CSS.
        </p>

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 text-brand-orange text-sm font-semibold shadow-inner">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-ping"></span>
          Frontend is Healthy & Active
        </div>
      </div>
    </div>
  );
}

export default App;
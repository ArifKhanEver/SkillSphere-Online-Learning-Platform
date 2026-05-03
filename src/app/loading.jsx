import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#149988]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        
        <div className="relative w-20 h-20">

          <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-[#149988] animate-[spin_2s_linear_infinite]"></div>

          <div className="absolute inset-2 rounded-full border-l-4 border-r-4 border-[#F97416] animate-[spin_1.5s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 rounded-full border-t-4 border-b-4 border-slate-800 animate-[spin_1s_linear_infinite]"></div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-1">
            Skill<span className="text-[#F97416]">Sphere</span>
            <span className="flex gap-1.5 ml-2 items-end pb-1">
              <span className="w-2 h-2 bg-[#149988] rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-[#149988] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-2 h-2 bg-[#149988] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
            </span>
          </h2>
          <p className="text-slate-400 font-bold text-xs mt-3 uppercase tracking-[0.2em] animate-pulse">
            Curating your experience
          </p>
        </div>

      </div>
    </div>
  );
}
"use client";

import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowLeft, HiOutlineHome } from 'react-icons/hi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#149988]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#F97416]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#149988]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        <div className="relative group cursor-default mb-8">
          <h1 className="text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#149988] to-[#0a5249] leading-none drop-shadow-2xl select-none transition-transform duration-500 group-hover:scale-105">
            404
          </h1>
          
          <div className="absolute -top-2 -right-2 md:top-4 md:-right-8 bg-[#F97416] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-orange-500/30 transform rotate-12 animate-bounce">
            Lost in Space
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
          We cannot find this page
        </h2>

        <p className="text-slate-500 font-medium mb-10 leading-relaxed max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable on the SkillSphere platform. Do not worry, you can easily navigate back to our main learning hub and continue your journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-[#149988] hover:text-[#149988] transition-all shadow-sm active:scale-95 group"
          >
            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Go Back
          </button>

          <Link 
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#149988] text-white rounded-2xl font-bold hover:bg-[#0f7d6f] transition-all shadow-lg shadow-teal-900/20 active:scale-95 group"
          >
            <HiOutlineHome className="group-hover:-translate-y-1 transition-transform" size={20} />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
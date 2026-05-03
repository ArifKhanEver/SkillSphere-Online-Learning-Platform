"use client";
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhotograph } from 'react-icons/hi';
import { FaPlayCircle, FaCheckCircle, FaUserGraduate } from 'react-icons/fa';

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-20 px-6">
      <div className="max-w-[1100px] w-full bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
        {/* Left Side*/}
        <div className="hidden md:flex md:w-1/2 bg-[#149988] p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97416]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
              Skill<span className="text-[#F97416]">Sphere</span>.
            </h2>
            <p className="text-teal-50 text-lg font-medium opacity-90 max-w-sm">
              Start your journey today and join thousands of learners worldwide.
            </p>
          </div>

          <div className="relative z-10 space-y-8 my-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#F97416] transition-all duration-300">
                <FaPlayCircle className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Instant Access</h4>
                <p className="text-teal-100/70 text-sm">Get access to all courses immediately.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#F97416] transition-all duration-300">
                <FaCheckCircle className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Expert Mentors</h4>
                <p className="text-teal-100/70 text-sm">Learn from the best in the industry.</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 border-t border-white/10">
            <p className="text-white/90 font-bold mb-4 italic">"Invest in yourself, it pays the best interest."</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#149988] bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-xs font-bold">Over 20k students already joined!</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto max-h-[90vh] md:max-h-full">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500 font-medium text-sm">Join us and start mastering new skills.</p>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all mb-6 shadow-sm">
            <FcGoogle size={22} />
            Sign up with Google
          </button>

          <div className="relative mb-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <span className="relative bg-white px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Or register with email</span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium text-sm"
                  required
                />
                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium text-sm"
                  required
                />
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase">Photo URL</label>
              <div className="relative">
                <input 
                  type="url" 
                  placeholder="https://image-link.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium text-sm"
                  required
                />
                <HiOutlinePhotograph className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium text-sm"
                  required
                />
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#149988] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#0f7d6f] hover:-translate-y-0.5 transition-all shadow-lg shadow-teal-900/10 mt-4"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-8 text-slate-500 font-medium text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-[#F97416] font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
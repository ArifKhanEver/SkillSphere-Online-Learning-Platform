"use client";

import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { FaCheckCircle, FaPlayCircle, FaUserGraduate } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { Flip, toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        }, {
            onSuccess: (ctx) => {
                toast.success('Sign In successful', {
                    theme: 'colored',
                    transition: Flip
                });
                redirect('/')
            },
            onError: (ctx) => {
                // display the error message
                toast.warning(ctx.error.message, {
                    theme: 'colored',
                    transition: Flip
                });
            },
        });

    };

    const handleGoogleSignin = async() => {
        await authClient.signIn.social({
            provider: 'google',
        })
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-20 px-6">
            <div className="max-w-[1100px] w-full bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row border border-slate-100">

                {/* Left Side */}
                <div className="hidden md:flex md:w-1/2 bg-[#149988] p-12 flex-col justify-between relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97416]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
                            Skill<span className="text-[#F97416]">Sphere</span>.
                        </h2>
                        <p className="text-teal-50 text-lg font-medium opacity-90 max-w-sm">
                            Elevate your career with the most in-demand technical skills.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-8 my-10">
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#F97416] transition-all duration-300">
                                <FaPlayCircle className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">10k+ Premium Courses</h4>
                                <p className="text-teal-100/70 text-sm">Learn from industry experts.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#F97416] transition-all duration-300">
                                <FaCheckCircle className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Verified Certificates</h4>
                                <p className="text-teal-100/70 text-sm">Boost your LinkedIn profile.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#F97416] transition-all duration-300">
                                <FaUserGraduate className="text-white" size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Expert Mentorship</h4>
                                <p className="text-teal-100/70 text-sm">Get 1-on-1 support anytime.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-10 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#149988] bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/80 text-xs font-bold">
                                Joined by <span className="text-[#F97416]">20k+</span> students
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-20">
                    <div className="mb-10">
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome Back!</h1>
                        <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
                    </div>

                    <button onClick={handleGoogleSignin} className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3.5 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all mb-8 shadow-sm">
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    <div className="relative mb-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <span className="relative bg-white px-4 text-xs font-black text-slate-400 uppercase tracking-widest">Or login with email</span>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="name@example.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium"
                                    required
                                />
                                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label className="text-sm font-bold text-slate-700">Password</label>
                                <Link href="#" className="text-xs font-bold text-[#149988] hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium"
                                    required
                                />
                                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#149988] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#0f7d6f] hover:-translate-y-0.5 transition-all shadow-lg shadow-teal-900/10 mt-4"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center mt-10 text-slate-500 font-medium text-sm">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-[#F97416] font-bold hover:underline">
                            Register for free
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
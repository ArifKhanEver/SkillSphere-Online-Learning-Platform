"use client";

import React from 'react';
import Image from 'next/image';
import { HiOutlineMail, HiOutlineUser, HiOutlinePhotograph, HiOutlinePencilAlt, HiOutlineX } from 'react-icons/hi';
import { authClient } from '@/lib/auth-client';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const openModal = () => {
        document.getElementById('edit_profile_modal').showModal();
    };

    const closeModal = () => {
        document.getElementById('edit_profile_modal').close();
    };

    const onSubmit = async(e)=>{
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image
        })

    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-dots loading-lg text-[#149988]"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 px-6 bg-[#FAF9F6]">
            <div className="max-w-3xl mx-auto">

                {/* Profile Card */}
                <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">

                    <div className="h-32 bg-gradient-to-r from-[#149988] to-[#117a6d] w-full"></div>

                    <div className="px-8 pb-12">
                        <div className="relative -mt-16 flex flex-col md:flex-row md:items-end gap-6 mb-10">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[35px] border-8 border-white overflow-hidden shadow-xl bg-slate-100">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 pb-2">
                                <h1 className="text-3xl font-black text-slate-900">{user.name}</h1>
                                <p className="text-[#149988] font-bold uppercase tracking-widest text-xs mt-1">Aspiring Software Engineer</p>
                            </div>

                            <button
                                onClick={openModal}
                                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95 cursor-pointer"
                            >
                                <HiOutlinePencilAlt size={18} />
                                Edit Profile
                            </button>
                        </div>

                        {/* User Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:border-[#149988]/30 transition-all">
                                <p className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">Full Name</p>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <HiOutlineUser className="text-[#149988]" size={20} />
                                    <span className="font-bold">{user.name}</span>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:border-[#149988]/30 transition-all">
                                <p className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">Email Address</p>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <HiOutlineMail className="text-[#149988]" size={20} />
                                    <span className="font-bold">{user.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="edit_profile_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm bg-slate-900/40">
                <div className="modal-box bg-white w-full max-w-md rounded-[40px] shadow-2xl p-8">
                    
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-black text-slate-900">Update Profile</h2>
                        <form method="dialog">
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer outline-none">
                                <HiOutlineX size={24} className="text-slate-400" />
                            </button>
                        </form>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-black text-slate-500 uppercase mb-2 ml-1">New Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Enter Your Name'
                                    defaultValue={user.name}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium"
                                />
                                <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-slate-500 uppercase mb-2 ml-1">Profile Image URL</label>
                            <div className="relative">
                                <input
                                    type="url"
                                    name='image'
                                    placeholder='Enter Your Image Url'
                                    defaultValue={user.image}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all font-medium"
                                />
                                <HiOutlinePhotograph className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            </div>
                        </div>

                        <button
                            type="submit"
                            onClick={closeModal}
                            className="w-full bg-[#149988] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#0f7d6f] shadow-lg shadow-teal-900/10 transition-all active:scale-95 cursor-pointer"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ProfilePage;
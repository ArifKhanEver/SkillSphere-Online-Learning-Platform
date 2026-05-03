import React from 'react';
import Link from 'next/link';
import { 
  FaTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPaypal, 
  FaCcVisa, 
  FaApplePay, 
  FaGooglePay, 
  FaStripe, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaGooglePlay, 
  FaApple 
} from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#FDF1EE] pt-20 pb-8 px-6 lg:px-20 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-2xl font-[900] text-slate-900 mb-6 tracking-tight">
              Skill<span className="text-[#fe6e38]">Sphere</span>.
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 pr-4">
              We're always in search for talented and motivated people. Don't be shy introduce yourself! Subscribe to our newsletter.
            </p>
            
            {/* Social Media */}
            <div className="mb-10">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Social Media</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-[#F97416] text-white p-2.5 rounded-full hover:bg-[#149988] transition-colors shadow-sm">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-[#149988] hover:border-[#149988] transition-colors shadow-sm">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-[#149988] hover:border-[#149988] transition-colors shadow-sm">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="bg-white border border-slate-200 text-slate-400 p-2.5 rounded-full hover:text-[#149988] hover:border-[#149988] transition-colors shadow-sm">
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>

            {/* Payment Gateways */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-4">We Accept Payment Gateway</h4>
              <div className="flex flex-wrap items-center gap-3 text-slate-400">
                <FaPaypal size={24} className="hover:text-[#00457C] transition-colors cursor-pointer" />
                <FaCcVisa size={24} className="hover:text-[#1A1F71] transition-colors cursor-pointer" />
                <FaGooglePay size={32} className="hover:text-slate-800 transition-colors cursor-pointer" />
                <FaApplePay size={32} className="hover:text-black transition-colors cursor-pointer" />
                <FaStripe size={28} className="hover:text-[#635BFF] transition-colors cursor-pointer" />
                <SiPaytm size={32} className="hover:text-[#002E6E] transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Column 2*/}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Company Info</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Mentors', 'Contact Us', 'Privacy policy','Terms & Conditions'].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-500 font-medium hover:text-[#149988] transition-colors text-sm flex items-center gap-2">
                    {index === 0 && <span className="w-4 h-[1px] bg-[#149988] inline-block"></span>}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Top Categories</h3>
            <ul className="space-y-4">
              {['Development', 'Design', 'Marketing', 'IT & Software', 'Health & Fitness', 'Math & Logic', 'Personal Development'].map((category, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-500 font-medium hover:text-[#149988] transition-colors text-sm">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4*/}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Download the LMS App</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 pr-4">
              Join us on this journey of discovery as we explore the latest trend.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#F97416] mt-1 flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">254 Lillian Blvd, Holbrook<br />New York</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#F97416] flex-shrink-0" size={14} />
                <span className="text-slate-600 text-sm font-medium">+880 1175 423 512</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 bg-[#F97416] text-white px-4 py-2 rounded-lg hover:bg-[#e06510] transition-colors shadow-md">
                <FaGooglePlay size={18} />
                <div className="text-left">
                  <span className="text-[10px] block leading-none">GET IT ON</span>
                  <span className="text-sm font-bold block leading-tight">Google Play</span>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-md">
                <FaApple size={20} />
                <div className="text-left">
                  <span className="text-[10px] block leading-none">Download on the</span>
                  <span className="text-sm font-bold block leading-tight">App Store</span>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 SkillSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
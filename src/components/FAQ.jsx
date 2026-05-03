"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How do I get started with your product?",
      answer: "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help you every step of the way with our comprehensive onboarding guide."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and mobile financial services like bKash, Nagad, and Rocket for your convenience."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day completely free trial for all our premium courses. You can cancel anytime within this period without being charged."
    },
    {
      question: "Is technical support available?",
      answer: "Absolutely. Our dedicated support team is available 24/7 via email and live chat to help you resolve any technical issues you might face."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Once canceled, you will still have access until the end of your current billing cycle."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-[#FCF9F8] py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[radial-gradient(circle,rgba(20,153,136,0.03)_0%,transparent_70%)] rounded-full -mt-40 -mr-40 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3 flex flex-col justify-start">
            <span className="text-[#F97416] bg-[#F97416]/10 px-4 py-1.5 rounded-full font-black uppercase tracking-widest text-[10px] mb-4 w-max">
              Testimonial & FAQ
            </span>
            <h2 className="text-4xl md:text-4xl font-[900] text-slate-900 leading-tight mb-6">
              Frequently asked <br />
              <span className="text-[#149988]">Questions</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-[#149988]/10 p-3 rounded-full text-[#149988]">
                <HiOutlineMail size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">Email Us Directly</h4>
                <a href="mailto:support@skillsphere.com" className="text-[#149988] font-medium hover:underline">
                  support@skillsphere.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl shadow-slate-200/40 border border-white">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div 
                    key={index} 
                    className={`border-b border-slate-100 last:border-none ${index !== 0 ? 'mt-4 pt-4' : ''}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                    >
                      <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-[#149988]' : 'text-slate-800 group-hover:text-[#F97416]'}`}>
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#149988] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-[#F97416] group-hover:text-white'}`}>
                        {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                      </div>
                    </button>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-500 font-medium leading-relaxed pr-8 md:pr-12">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
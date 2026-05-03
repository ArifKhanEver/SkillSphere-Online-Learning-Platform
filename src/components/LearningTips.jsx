import React from 'react';
import { Lightbulb, Clock, BookOpen, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const LearningTips = () => {
 
  const tipsData = [
    {
      category: "Study Techniques",
      icon: <BookOpen className="text-white w-6 h-6" />,
      accentColor: "bg-[#21C55D]",
      bulletColor: "bg-[#21C55D]",
      tips: [
        { 
          title: "Active Recall", 
          description: "Enhance memory retention by testing yourself instead of passively rereading notes." 
        },
        { 
          title: "Spaced Repetition", 
          description: "Review information at increasing intervals to move data into long-term memory." 
        },
        { 
          title: "Feynman Technique", 
          description: "Solidify your understanding by explaining complex concepts in simple terms, as if teaching a child." 
        }
      ]
    },
    {
      category: "Time Management",
      icon: <Clock className="text-white w-6 h-6" />,
      accentColor: "bg-[#F97416]",
      bulletColor: "bg-[#F97416]",
      tips: [
        { 
          title: "Pomodoro Technique", 
          description: "Maintain peak productivity by working in 25-minute focused bursts followed by a 5-minute break." 
        },
        { 
          title: "Eat the Frog", 
          description: "Tackle your most challenging and important task first thing in the morning to build momentum." 
        },
        { 
          title: "Time Blocking", 
          description: "Dedicate specific slots in your calendar for different tasks to avoid multitasking fatigue." 
        }
      ]
    }
  ];

  return (
    <section id='technics' className="bg-[#FDF1EE] py-14 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="bg-[#FFEFE8] text-[#F97416] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
            Learning Optimization
          </span>
          <h2 className="text-[28px] md:text-5xl font-[900] text-slate-900 leading-tight">
            Master Your Skills with <br />
            <span className="text-[#149988]">Expert Techniques</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {tipsData.map((section, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-orange-50 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`${section.accentColor} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{section.category}</h3>
              </div>

              <div className="space-y-8">
                {section.tips.map((tip, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-2">
                      <div className={`w-2 h-2 rounded-full ${section.bulletColor}`}></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-800 mb-1">{tip.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-[#149988] rounded-[30px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-2xl shadow-teal-100">
           <div className="flex items-center gap-4 text-center md:text-left">
              <div className="bg-white/20 p-3 rounded-full hidden sm:block">
                <Zap className="w-8 h-8 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-black">Ready to Accelerate?</h3>
                <p className="opacity-80 font-medium">Apply these strategies to achieve unparalleled progress in your journey.</p>
              </div>
           </div>
           <Link href={'/allcourses'} className="bg-white text-[#149988] px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all whitespace-nowrap active:scale-95">
              Explore More Resources
           </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
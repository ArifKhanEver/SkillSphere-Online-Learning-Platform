import Instructor1 from '@/assets/instructor1.jpg';
import Instructor2 from '@/assets/instructor2.jpg';
import Instructor3 from '@/assets/instructor3.jpg';
import Instructor4 from '@/assets/instructor4.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaUsers, FaLinkedinIn, FaTwitter, FaGlobe } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const TopInstructors = () => {

    
  const instructors = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Senior UI/UX Architect",
      students: "15k+",
      rating: "4.9",
      image: Instructor1, 
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Saiful Talukdar",
      role: "Lead Full Stack Developer",
      students: "12k+",
      rating: "4.8",
      image: Instructor2,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Mark Thompson",
      role: "Digital Marketing Expert",
      students: "10k+",
      rating: "5.0",
      image: Instructor3,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    },
    {
      name: "Jessica Williams",
      role: "Data Science Specialist",
      students: "8k+",
      rating: "4.7",
      image: Instructor4,
      socials: { linkedin: "#", twitter: "#", web: "#" }
    }
  ];

  return (
    <section id='instructors' className="bg-gray-100 py-14 px-6 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
          <div className="max-w-xl">
            <span className="text-[#F97416] font-black uppercase tracking-widest text-xs mb-3 block">
              World-Class Mentors
            </span>
            <h2 className="text-4xl md:text-5xl font-[900] text-slate-900">
              Learn from the <span className="text-[#149988]">Best Instructors</span>
            </h2>
          </div>
          <Link href={'/allcourses'} className="flex items-center gap-2 text-[#149988] font-bold border-b-2 border-transparent hover:border-[#149988] pb-1 transition-all">
            See All Mentors <HiArrowNarrowRight />
          </Link>
        </div>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {instructors.map((mentor, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-300 rounded-2xl p-4 hover:shadow-2xl hover:shadow-teal-50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-slate-100">
                <div className="w-full h-full relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-tighter text-center px-4">
                     {mentor.name}
                   </div>
                   
                     <Image 
                       src={mentor.image} 
                       alt={mentor.name} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700" 
                     /> 
                  
                </div>
                
                <div className="absolute inset-0 bg-[#149988]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                   <a href={mentor.socials.linkedin} className="bg-white p-2.5 rounded-full text-[#149988] hover:bg-[#F97416] hover:text-white transition-all shadow-lg">
                     <FaLinkedinIn size={16} />
                   </a>
                   <a href={mentor.socials.twitter} className="bg-white p-2.5 rounded-full text-[#149988] hover:bg-[#F97416] hover:text-white transition-all shadow-lg">
                     <FaTwitter size={16} />
                   </a>
                   <a href={mentor.socials.web} className="bg-white p-2.5 rounded-full text-[#149988] hover:bg-[#F97416] hover:text-white transition-all shadow-lg">
                     <FaGlobe size={16} />
                   </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#149988] transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-slate-500 font-medium text-sm mb-4">
                  {mentor.role}
                </p>

                <div className="flex items-center justify-between gap-4 pt-1 px-1 border-t border-slate-50">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#F97416]" size={12} />
                    <span className="text-xs font-bold text-slate-700">{mentor.rating}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-[#149988]" size={12} />
                    <span className="text-xs font-bold text-slate-700">{mentor.students} Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
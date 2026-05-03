import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { FaFire, FaRegClock, FaStar, FaArrowRight } from 'react-icons/fa';

const CourseCard = ({ course }) => {

    return (
        <div>
            <div key={course.id} className="group relative bg-[#F9FAFB] rounded-[24px] p-1.5 border border-gray-200 hover:border-[#149988]/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col h-full">

                <div className="relative h-40 w-full bg-slate-200 rounded-[18px] overflow-hidden mb-3">
                    <Image fill
                        src={course.image}
                        alt={course.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white backdrop-blur-sm text-slate-900 text-[10px] font-black px-2 py-1 rounded-full shadow-sm z-10">
                        {course.tag}
                    </span>
                </div>

                {/* Content */}
                <div className="px-3 pb-3 flex flex-col flex-grow">
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="flex items-center gap-0.5 text-[#F97416]">
                            <FaStar size={12} />
                            <span className="text-[12px] font-bold"> {course.rating}</span>
                        </div>
                        <span className="text-slate-500 text-[12px]">({course.reviews} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#149988] transition-colors line-clamp-1">
                        {course.title}
                    </h3>

                    {/* Instructor */}
                    <p className="text-[14px] font-semibold text-slate-500 mb-1.5">
                        By <span className="font-semibold text-slate-700">{course.instructor}</span>
                    </p>

                    {/* Description */}
                    <p className="text-slate-700 text-[13px] line-clamp-2 mb-3 leading-relaxed">
                        {course.description}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 mt-auto mb-3">
                        <div className="flex items-center gap-1.5">
                            <FaRegClock className="text-slate-400" size={14} />
                            <span className="text-[12px] font-bold text-slate-500">{course.duration}</span>
                        </div>
                        <span className="text-lg font-black text-[#149988]">${course.price}</span>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/course/${course.id}`}>
                        <button className="w-full py-2.5 bg-[#149988] text-white text-[12px] font-bold rounded-xl group-hover:bg-[#107568] transition-all duration-300 active:scale-95 cursor-pointer">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
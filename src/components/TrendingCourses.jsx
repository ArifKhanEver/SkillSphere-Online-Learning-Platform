"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import trendingData from '@/lib/data.json'
import { FaFire, FaRegClock, FaStar, FaArrowRight } from 'react-icons/fa';
import CourseCard from './CourseCard';
import Link from "next/link";


const TrendingCourses = () => {

  return (
    <section className="py-14 bg-white px-6 lg:px-20">
      <div className="container mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaFire className="text-[#F97416] animate-pulse" />
              <span className="text-[#F97416] font-black uppercase tracking-widest text-xs">
                What's Hot Right Now
              </span>
            </div>
            <h2 className="text-4xl font-[900] text-slate-900">
              Trending <span className="text-[#149988]">Courses</span>
            </h2>
          </div>
          <Link href={'/allcourses'} className="hidden md:flex items-center gap-2 text-slate-500 font-bold hover:text-[#149988] transition-all">
            View All Trending <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper !pb-12"
          >

            {trendingData.filter(course => course.tag === 'Trending').map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TrendingCourses;
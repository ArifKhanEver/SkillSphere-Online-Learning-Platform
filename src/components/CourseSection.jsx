"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';
import courses from '@/lib/data.json'
import CourseCard from './CourseCard';


const CourseSection = () => {

  return (
    <section className="bg-gray-100 pt-18 px-6 lg:px-20">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-12">
          <div>
            <span className="bg-[#F97416] text-white px-6 py-1 rounded-full text-sm font-bold tracking-wider mb-5 inline-block -rotate-12">
              Our Courses
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111827]">
              Explore Our Popular Course
            </h2>
          </div>

          {/* All Course Button*/}

          <div className="mt-6 text-center">
            <Link href={"/allcourses"} className="bg-[#F97416] hover:bg-[#e66509] text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-green-50 cursor-pointer">
              See All Course
            </Link>
          </div>
        </div>

        <div className="w-full py-4">
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
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course}></CourseCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </section>
  );
};

export default CourseSection;
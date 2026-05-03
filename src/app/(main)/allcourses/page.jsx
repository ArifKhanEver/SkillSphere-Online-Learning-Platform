"use client";
import CourseCard from '@/components/CourseCard';
import allCoursesData from '@/lib/data.json'
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar, FaRegClock } from 'react-icons/fa';

const AllCourses = () => {
  // State for filtering and searching
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for the filter menu
  const categories = ['All', 'Development', 'Design', 'Marketing', 'Business'];

  // Filtering Logic
  const filteredCourses = allCoursesData.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-24">
      
      {/* Page Header Area */}
      <div className="bg-[#149988] pt-32 pb-20 px-6 lg:px-20 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F97416]/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[900] text-white mb-6">
            Explore Our <span className="text-[#f8b188]">Course Catalog</span>
          </h1>
          <p className="text-teal-50 font-medium text-lg">
            Discover hundreds of premium courses taught by industry experts. Enhance your skills and advance your career today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 -mt-8 relative z-20">
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-[24px] p-4 md:p-6 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Search for courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:outline-none focus:border-[#149988] focus:ring-1 focus:ring-[#149988] transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <FaFilter className="text-slate-400 mr-2 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category 
                  ? 'bg-[#149988] text-white shadow-md' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course,index) => (
                <CourseCard key={index} course={course}></CourseCard>
            ))}
          </div>
        ) : (
          /* Empty State when search/filter yields no results */
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 bg-[#F97416] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#e06510] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllCourses;
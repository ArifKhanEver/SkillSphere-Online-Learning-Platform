import React from 'react';

const AboutUs = () => {
    return (
        <section>
            {/* Lower Stats Area - Pure White Background */}
            <div className="bg-white py-12 md:py-20 px-6 lg:px-20">
                <div className="container mx-auto text-center">
                    <span className="text-[#D1FAE5] bg-[#1bb59f] px-5 py-1.5 rounded-full text-sm font-black mb-8 inline-block -rotate-12">
                        About Us
                    </span>

                    <h2 className="text-xl md:text-3xl md:text-3xl font-semibold text-[#111827] max-w-4xl mx-auto leading-snug mb-6 md:mb-10 tracking-tight">
                        We are passionate about empowering learners <span className="text-gray-500">Worldwide with high-quality, accessible & engaging education. Our mission offering a diverse range of courses.</span>
                    </h2>

                    {/* Stats Flexbox */}
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-16 md:gap-14 border-t border-gray-100 pt-6">
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-[#111827]">25+</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Years of eLearning Education Experience
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-[#111827]">56k</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Students Enrolled in LMSZONE Courses
                            </p>
                        </div>
                        <div className="flex gap-1 md:gap-3 items-center md:items-start">
                            <span className="text-5xl md:text-6xl font-[900] text-[#111827]">170+</span>
                            <p className="text-gray-500 text-sm font-bold mt-2 text-center md:text-left leading-tight max-w-[180px]">
                                Experienced Teacher's service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
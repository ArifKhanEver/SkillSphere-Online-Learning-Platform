import HeroFigure from '@/assets/HeroFigure.png'
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';


const Hero = () => {
  return (
    <section>
      <div className="bg-[#FDF1EE] pt-12 md:pt-8 px-6 lg:px-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            {/* Tag/Pill */}
            <span className="bg-[#fad4c4] text-[#F97416] px-6 py-1 rounded-xl text-xs font-bold tracking-wide shadow-sm inline-block -rotate-12">
              eLearning Platform
            </span>
            
            {/* Heading with precise bold weight */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-[#111827] mt-8 mb-6 leading-[1.05] tracking-tight">
              Smart Learning <br />
              Deeper & More <br />
              <span className="text-[#F97416]">-Amazing</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg lg:text-lg max-w-lg mb-10 leading-relaxed font-medium">
              Phosfluorescently deploy unique intellectual capital without enterprise-after bricks & clicks synergy. Enthusiastically revolutionize intuitive.
            </p>
            
            {/* CTAs */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="bg-[#1bb59f] hover:bg-[#158d7b] text-white px-4 md:px-8 py-2.5 rounded-full font-extrabold text-sm flex items-center gap-2 transition-all shadow-lg shadow-green-100 cursor-pointer group">
                Start Free Trial <span className="text-xl inline-block group-hover:rotate-45 group-hover:scale-130 transition-transform">↗</span>
              </button>
              
              <button className="flex items-center gap-2 font-extrabold text-[#111827] hover:text-[#F97416] transition-all group border border-[#F97416] p-1 rounded-full">
                <span className="w-10 h-10 flex items-center justify-center bg-[#F97416] text-white rounded-full shadow-lg shadow-orange-100 group-hover:scale-110 transition-transform">
                  <FaPlay className="text-[10px] ml-0.5" />
                </span>
                <span className='mr-2'>How it Works</span>
              </button>
            </div>
          </div>

          {/* Right Content - Image & Shapes */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Background Gradient Shapes from the image */}
            <div className="absolute -z-10 w-[120%] h-[120%] -top-10 -right-10 opacity-30 pointer-events-none">
                {/* Simulated Green/Orange shapes behind person */}
                <div className="absolute top-20 right-10 w-64 h-96 bg-[#21C55D] rounded-[40px] rotate-[35deg] blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-64 h-80 bg-[#F97416] rounded-[40px] rotate-[15deg] blur-3xl"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-0 bg-white p-3 rounded-2xl shadow-2xl z-20 animate-pulse">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
            </div>
            <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-2xl z-20">
                <img src="https://www.google.com/favicon.ico" alt="google" className="w-6 h-6" />
            </div>

            {/* Main Person Image Container */}
            <div className="relative">
              <Image src={HeroFigure} alt='student' width={600} height={600}
                className="relative z-10 w-full max-w-lg object-contain"
              />
              {/* Geometric Decoration from Capture.jpg */}
              <div className="absolute bottom-10 -right-10 w-[450px] h-[300px] bg-gradient-to-br from-[#21C55D] to-[#F97416] rounded-[50px] -rotate-12 -z-0 opacity-80 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
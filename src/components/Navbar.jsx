'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Courses', href: '/allcourses' },
    { name: 'Technics', href: '/#technics' },
    { name: 'Instructors', href: '/#instructors' },
    { name: 'FAQ', href: '/#faq' },
  ];
  return (
    <nav className="bg-[#F9F1EF] py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="flex-start">
          <Link href="/" className="text-xl md:text-2xl font-black flex items-center">
            <span className="text-[#2C3E50]">Skill</span>
            <span className="text-[#fe6e38]">Sphere</span>
            <span className="w-2 h-2 bg-[#fe6e38] rounded-full ml-1 self-end mb-1"></span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {
            navLinks.map((link, index)=><li key={index}>
            <Link href={link.href} className={`${link.href == pathname? "text-[#fe6e38]":'text-black' } text-sm font-bold flex items-center gap-1`}>
              <span>{link.href == pathname && '*'}</span> {link.name}
            </Link>
          </li>

            )
          }
          
        </ul>

        {/* Auth Buttons - Layout from 2nd image, Colors from 1st image */}
        <div className="flex items-center gap-0.5 md:gap-2">
          {/* Sign In Button - Minimal text style */}
          <Link 
            href="/login" 
            className="text-[#fe6e38] font-bold text-sm px-3 md:px-6 py-2 md:py-2.5 rounded-md hover:bg-[#fe6e38] hover:text-white transition-all"
          >
            Sign In
          </Link>
          
          {/* Register Button - Solid pill shape from 'Join Us' style */}
          <Link 
            href="/register" 
            className="bg-[#fe6e38]  text-white px-3 md:px-6 py-2 md:py-2.5 rounded-md font-bold text-sm hover:bg-[#e7541f] transition-all"
          >
            Register
          </Link>

          {/* Mobile Menu Toggle - Visible only on small screens */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-[#D35400]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-700">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Our Course</Link></li>
              <li><Link href="/mentors">Mentors</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
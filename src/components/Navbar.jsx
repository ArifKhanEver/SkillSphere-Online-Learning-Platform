'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user;

  const pathname = usePathname()
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/allcourses' },
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
            navLinks.map((link, index) => <li key={index}>
              <Link href={link.href} className={`${link.href == pathname ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
                <span>{link.href == pathname && '*'}</span> {link.name}
              </Link>
            </li>

            )
          }
          {
            user && <Link href='/profile' className={`${pathname == '/profile' ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
              <span>{pathname == '/profile' && '*'}</span>My Profile
            </Link>
          }

        </ul>

        {/* SignIn & SignUp */}
        <div className="flex items-center gap-0.5 md:gap-2">

          {
            user ?
              <div className="flex items-center gap-3 md:gap-5 bg-white/50 backdrop-blur-md p-1.5 pr-2 md:pr-3 rounded-full border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 pl-2">
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] font-bold text-[#149988] uppercase tracking-tighter">
                      Student
                    </p>
                    <h5 className="text-sm font-black text-slate-900 leading-none capitalize">
                      {user.name}
                    </h5>
                  </div>

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full relative overflow-hidden border-2 border-[#149988]/20 p-0.5 group cursor-pointer">
                    <Link href='/profile' className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>

                <button
                  onClick={async () => await authClient.signOut()}
                  className="bg-[#F97416] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e06510] hover:shadow-lg hover:shadow-[#F97416]/20 transition-all active:scale-95"
                >
                  Sign Out
                </button>
              </div>
              :
              <div className="flex items-center gap-2 md:gap-3 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-slate-100 shadow-sm">
                <Link
                  href="/login"
                  className="text-[#F97416] font-bold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F97416]/10 transition-all active:scale-95"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="bg-[#F97416] text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e06510] hover:shadow-lg hover:shadow-[#F97416]/20 transition-all active:scale-95 shadow-md"
                >
                  Register
                </Link>
              </div>
          }



          {/* Mobile Menu Toggle */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-[#D35400]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-700">
              {
                navLinks.map((link, index) => <li key={index}>
                  <Link href={link.href} className={`${link.href == pathname ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
                    <span>{link.href == pathname && '*'}</span> {link.name}
                  </Link>
                </li>

                )
              }

              {
                user && <Link href='/profile' className={`${pathname == '/profile' ? "text-[#fe6e38]" : 'text-black'} text-sm font-bold flex items-center gap-1`}>
                  <span>{pathname == '/profile' && '*'}</span> Profile
                </Link>
              }
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
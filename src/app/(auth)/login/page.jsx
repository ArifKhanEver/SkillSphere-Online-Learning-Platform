'use client'
import Link from 'next/link';
// import logo from '@/assets/logo.png'
import Image from 'next/image';
// import { useForm } from 'react-hook-form';
// import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
// import { createAuthClient } from 'better-auth/react';


const LoginPage = () => {
    const authClient = createAuthClient();

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [visiblePass, setVisiblePass] = useState(false)


    const onSubmit = async (data) => {


        const { name, photoUrl, email, password, condition } = data;

        const { data: res, error } = await authClient.signIn.email({
            name, // required
            email, // required
            password, // required
            image: photoUrl,
            callbackURL: "/",
        });

    }

    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans px-6">

            {/* Container with shadow and rounded corners */}
            <div className="bg-white p-12 md:p-16 rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full my-12">

                {/* Header/Title */}
                <div className="text-center mb-10 border-b border-gray-100 pb-8">
                    <div className="text-6xl font-black uppercase tracking-tighter mb-4">
                        {/* <Image src={logo} alt='logo' width={300} height={200} className='mx-auto' /> */}
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">Login your account</h2>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Email address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register('email', { required: "Email is required" })}
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"

                        />
                        {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email.message}</p>}

                    </div>

                    {/* Password Input */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Password</span>
                        </label>
                        <input
                            type={visiblePass ? "text" : "password"} placeholder="Enter your password"
                            {...register('password', { required: "Password is required" })}
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"

                        />
                        <span onClick={() => setVisiblePass(!visiblePass)} className='text-2xl absolute top-10 right-4'>{visiblePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password.message}</p>}
                        {/* Optional: Forgot Password Link */}
                        <div className="text-right mt-1">
                            <Link href="#" className="text-xs text-slate-500 hover:text-red-600">Forgot Password?</Link>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="form-control pt-4">
                        <button
                            type="submit"
                            className="btn bg-[#403F3F] text-white w-full h-14 rounded-sm font-bold text-base hover:bg-red-600 border-none transition-all duration-300 active:scale-95"
                        >
                            Login
                        </button>
                    </div>
                </form>


                {/* Register Link */}
                <div className="text-center pt-6 border-t border-gray-100">
                    <p className="text-sm text-slate-600 font-medium">
                        Dont Have An Account?{' '}
                        <Link href="/register" className="text-red-600 font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>


                <div className="space-y-2 mt-8">
                    <button onClick={handleGoogleSignin} className="btn btn-outline btn-info w-full normal-case font-bold gap-2 text-blue-500 border-blue-400">
                        <FaGoogle /> Login with Google
                    </button>
                    <button onClick={handleGithubSignin} className="btn btn-outline w-full normal-case font-bold gap-2 text-slate-700 border-slate-300">
                        <FaGithub /> Login with Github
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
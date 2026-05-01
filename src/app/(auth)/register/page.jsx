'use client'
import logo from '@/assets/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { createAuthClient } from 'better-auth/react';

const RegisterPage = () => {

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
        const { name, photoUrl, email, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name, // required
            email, // required
            password, // required
            image: photoUrl
        });

        console.log('response', res, error)
        if (error) {
            toast.warning(error.message, { theme: 'colored' })
        } else {
            toast.success('SignUp Successful', { theme: "colored" })
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans px-6 py-12">

            {/* main Container */}
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-lg border border-gray-100 max-w-xl w-full">

                {/* Header Section */}
                <div className="text-center mb-10 border-b border-gray-100 pb-8">
                    <div className="text-6xl font-black uppercase tracking-tighter mb-4">
                        <Image src={logo} alt='logo' width={300} height={200} className='mx-auto' />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">Register your account</h2>
                </div>

                {/* Register Form*/}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* name Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"
                            {...register('name', { required: "Name is required" })}
                        />
                        {errors.name && <p className='text-red-600 mt-1 text-sm'>{errors.name.message}</p>}
                    </div>

                    {/* Photo Url Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photoUrl'
                            placeholder="Enter your photo url"
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"
                            {...register('photoUrl', { required: "Photo Url is required" })}
                        />
                        {errors.photoUrl && <p className='text-red-600 mt-1 text-sm'>{errors.photoUrl.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"
                            {...register('email', { required: "Email is required" })}
                        />
                        {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email.message}</p>}
                    </div>

                    {/* Pssword Input*/}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-800 text-sm">Password</span>
                        </label>
                        <input
                            type={visiblePass ? "text" : "password"}
                            placeholder="Enter your password"
                            className="input bg-[#F3F3F3] border-none rounded-sm w-full h-14 text-sm text-slate-600 focus:ring-1 focus:ring-red-300"
                            {...register('password', { required: "Password is required" })}
                        />
                        <span onClick={() => setVisiblePass(!visiblePass)} className='text-2xl absolute top-10 right-4'>{visiblePass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password.message}</p>}
                    </div>

                    {/* Terms & Condition Checkbox*/}
                    <div className="flex items-center gap-2 py-2">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm rounded-sm border-gray-400 checked:bg-green-600 text-white"
                            id="terms"
                            {...register('condition', { required: "Condition is required" })}
                        />
                        <label htmlFor="terms" className="text-xs text-slate-500 font-medium cursor-pointer">
                            Accept <span className="font-bold text-slate-700">Term & Conditions</span>
                        </label>
                        {errors.condition && <p className='text-red-600 mt-1 text-sm'>{errors.condition.message}</p>}
                    </div>

                    {/* Register Button */}
                    <div className="form-control pt-2">
                        <button
                            type="submit"
                            className="btn bg-[#403F3F] text-white w-full h-14 rounded-sm font-bold text-base hover:bg-red-600 border-none transition-all duration-300 active:scale-95"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* Login link */}
                <div className="text-center mt-10 pt-6 border-t border-gray-100">
                    <p className="text-sm text-slate-600 font-medium">
                        Already Have An Account?{' '}
                        <Link href="/login" className="text-red-600 font-bold hover:underline">
                            Login
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

export default RegisterPage;
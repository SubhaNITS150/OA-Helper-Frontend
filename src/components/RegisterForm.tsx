'use client';

import {useEffect, useState} from "react";
import Link from "next/link";
import {GoogleLogin} from "@react-oauth/google";
import SignInWithGithub from "@/lib/utils/SignInWithGithub";
import axios from "@/lib/utils/axios"
import {useRouter} from "next/navigation";
import {toast, ToastContainer} from "react-toastify";
import useIsMobileView from "@/context/useIsMobileView";

export default function RegisterForm() {
    // const [isMobileView, setIsMobileView] = useState<boolean>(true);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const isMobileView = useIsMobileView();
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignUp = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try{
            const res = await axios.post("/user", form);
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success("Sign up Successful, Please login now");
            router.push("/auth");
        } catch(error){
            toast.error('Sign up failed');
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-full flex flex-col px-6">
            {!isMobileView && (<div className="hidden md:flex md:justify-end text-[#666666]">
                Already have an account? <span className="ml-2 underline underline-offset-2 text-[#2f2f2f]"><Link
                href='/auth'> Sign In</Link></span>
            </div>)}

            <div className="w-full flex my-14">
                <h1 className="text-3xl">Sign Up</h1>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
            <form className="flex flex-col gap-2"
                  onSubmit={handleSignUp}
            >
                <GoogleLogin onSuccess={() => {}}
                             onError={() => toast.error('Google Sign-In error')}
                             shape="pill"
                             theme="outline"
                             size="large"
                />

                <SignInWithGithub/>

                <div className="flex flex-row items-center my-6">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <span className="px-4 text-sm text-gray-500">OR</span>
                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-1">
                    <div className="flex flex-row justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">
                            Your Password
                        </label>
                        <div className="block text-sm font-medium text-gray-500 mb-1">
                            Hide
                        </div>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div
                    className="flex justify-center sm:justify-end underline underline-offset-2 text-sm text-gray-900 mb-6 sm:mb-2">
                    <Link href='/'>Forget Your Password</Link>
                </div>

                <div className="flex justify-center sm:justify-start ">
                    <button
                        type="submit"
                        className="bg-black text-white w-[50%] py-[12px] rounded-3xl cursor-pointer"
                        >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
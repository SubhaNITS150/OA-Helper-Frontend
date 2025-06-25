'use client';

import Link from 'next/link';
import {useState, useEffect} from 'react';
import axios from "@/lib/utils/axios";
import {toast, ToastContainer} from "react-toastify";
import {useRouter} from "next/navigation";
import SignInWithGithub from "@/lib/utils/SignInWithGithub";
import {GoogleLogin} from "@react-oauth/google";
import useIsMobileView from "@/context/useIsMobileView";

export default function AuthForm() {

    // const [isMobileView, setIsMobileView] = useState<boolean>(true);
    const [form, setForm] = useState({email: '', password: ''});
    const router = useRouter();

    // useEffect(() => {
    //     const checkScreenSize = () => {
    //         setIsMobileView(window.innerWidth < 640);
    //     }
    //     checkScreenSize();
    //
    //     window.addEventListener('resize', checkScreenSize);
    //     return () => {
    //         window.removeEventListener('resize', checkScreenSize);
    //     }
    // }, []);

    const isMobileView = useIsMobileView();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            const res = await axios.post("/user/login", form);
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success('Sign in Successful');
            router.push("/");
        } catch(error){
            toast.error('Sign in Failed');
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-full flex flex-col pl-6">
            {!isMobileView && (<div className="hidden md:flex md:justify-end text-[#666666]">
                Don't have an account? <span className="ml-2 underline underline-offset-2 text-[#2f2f2f]"><Link
                href='/register'> Sign Up</Link></span>
            </div>)}

            <div className="w-full flex my-14">
                <h1 className="text-3xl">Sign In</h1>
            </div>

            <ToastContainer position="top-right" autoClose={3000}/>

            <form className="flex flex-col gap-2"
                  onSubmit={handleSubmit}>
                <GoogleLogin onSuccess={() => {
                }}
                             onError={() => {
                             }}
                             shape="pill"
                             theme="outline"
                             size="large"
                />

                <SignInWithGithub />

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

                <div className="mb-1">
                    <div className="flex flex-row justify-between">
                        <label htmlFor="pasword" className="block text-sm font-medium text-gray-500 mb-1">
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
                    <button className="bg-black text-white w-[50%] py-[12px] rounded-3xl cursor-pointer">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}


'use client';
import {useEffect, useState} from "react";
import Link from "next/link";
import { useLogin } from "@/context/useLogin";
import { useRouter } from "next/navigation";

interface User {
    name: string;
    id: string;
    email: string;
}

export default function Navbar() {

    const router = useRouter();

    const checkIfSignIn = () => {
    if (user) {
      localStorage.removeItem("user");
      setUser(null);
    } else {
      router.push("/auth");
    }
  };

    const { user, setUser } = useLogin();

    return(
        <div className="hidden w-[100%] border-b-2 border-gray-300 h-20 px-16 md:flex flex-row justify-between items-center">
            <div className="flex items-center justify-center">
                <h1 className="font-bold text-2xl">OA Helper</h1>
            </div>

            <nav className="flex items-center gap-8">
                <Link href="/">Home</Link>
                <Link href="/practice">Practice</Link>
                <Link href="/Dashboard">Dashboard</Link>
                <Link href="/">Contribute</Link>
                <Link href="/">Friendzone</Link>

                <button 
                onClick={checkIfSignIn}
                className="px-6 py-3 bg-[#4CAF4F] rounded-md text-white font-semibold">{user ? `${user.name}` : "Register Now"}</button>
            </nav>
        </div>
    );
}

'use client';

import AuthForm from "@/components/AuthForm";
import {useEffect, useState} from "react";

export default function AuthPage() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className="h-screen w-full flex flex-row">
            {!isMobile && (
                <div className="w-[50%] h-screen px-6 bg-amber-500">
                    {/* Image div */}
                </div>
            )}
            <div className={`${isMobile ? "w-full" : "w-[50%]"} h-screen px-6 my-8`}>
                <AuthForm />
            </div>
        </div>
    );
}
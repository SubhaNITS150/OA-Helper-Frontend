"use client";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import Link from "next/link";
import { useLogin } from "@/context/useLogin";
import { useRouter } from "next/navigation";

export default function NavbarMobile() {
  const [isActive, setIsActive] = useState(false);

  const toggleBtnHandler = () => {
    console.log("toggle button trigerred");
    setIsActive(!isActive);
  };

  const checkIfSignIn = () => {
    if (user) {
      localStorage.removeItem("user");
      setUser(null);
    } else {
      router.push("/auth");
    }
  };

  const { user, setUser } = useLogin();
  const router = useRouter();

  return (
    <div className="h-16 border-2 border-gray-800 w-full flex flex-row items-center justify-between px-8">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-xl font-bold">OA Helper</h1>
      </div>

      <button
        onClick={toggleBtnHandler}
        className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800 duration-200"
      >
        <IoMdMenu />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="inset-0 absolute z-999"
            style={{ backgroundColor: "var(--color-primary)" }}
            onClick={toggleBtnHandler}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full h-[30vh] flex flex-col px-4 py-4">
              <div className="flex flex-row justify-between  items-center">
                <img
                  src="https://res.cloudinary.com/dludtk5vz/image/upload/v1750608745/ChatGPT_Image_Jun_22_2025_09_41_04_PM_pa8vq3.png"
                  alt="Logo"
                  className="h-20 w-20"
                />
                <RxCross1
                  className="text-2xl flex items-center"
                  style={{ color: "var(--color-text)" }}
                />
              </div>

              <div className="flex px-4 py-3 flex-col gap-2">
                <h1
                  className="text-2xl font-semibold tracking-wide"
                  style={{ color: "var(--color-text)" }}
                >
                  {user ? `${user.name}`: "Hello"}
                </h1>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {user ? `${user.email}`: "Welcome to OA Helper"}
                </p>
              </div>
            </div>
            <div
              className="w-full h-[70vh] flex flex-col gap-5"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <div className="px-4 py-6 flex flex-col gap-6">
                <div className="flex flex-row gap-6 items-center">
                  <FaHome className="text-2xl ml-5" />
                  <Link className="text-[18px]" href="/">
                    Home
                  </Link>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <LiaStarSolid className="text-2xl ml-5" />
                  <Link className="text-[18px]" href="/practice">
                    Practice
                  </Link>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <FaHome className="text-2xl ml-5" />
                  <Link className="text-[18px]" href="/Dashboard">
                    Dashboard
                  </Link>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <FaHome className="text-2xl ml-5" />
                  <Link className="text-[18px]" href="/">
                    Contribute
                  </Link>
                </div>
                <div className="flex flex-row gap-6 items-center">
                  <FaHome className="text-2xl ml-5" />
                  <Link className="text-[18px]" href="/">
                    Friendzone
                  </Link>
                </div>
              </div>

              <div className="h-[1px] bg-gray-300"></div>

              <div className="flex">
                <button
                  className="px-8 py-3 bg-[#4CAF4F] rounded-md text-white font-semibold mx-auto my-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    checkIfSignIn();
                  }}
                >
                  {user ? "Sign Out" : "Sign In"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
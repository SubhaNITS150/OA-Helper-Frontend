"use client";

import Navbar from "@/components/Navbar";
import useIsMobileView from "@/context/useIsMobileView";
import NavbarMobile from "@/components/NavbarMobile";
import { LoginProvider } from "@/context/useLogin";
import Hero from "@/components/Hero";
import Client from "@/components/Client";

export default function Home() {
  const isMobileView = useIsMobileView();

  return (
    <LoginProvider>
      <div>{isMobileView ? <NavbarMobile /> : <Navbar />}</div>
      <Hero />
      <Client />
    </LoginProvider>
  );
}

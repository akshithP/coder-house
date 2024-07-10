"use client";
import Image from "next/image";
import Browser from "./components/HeroSection/BrowserArt";

export default function Home() {
  return (
    <main className="flex justify-center items-center lg:max-w-7xl lg:mx-auto max-w-full px-8 p-4">
      <Browser />
    </main>
  );
}

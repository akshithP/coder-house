"use client";
import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { Input } from "@nextui-org/input";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import CoderStudent from "../../../public/coder.png";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Browser = () => {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
      className="flex flex-col justify-center items-center w-full"
    >
      {/*-----------BROWSER SEARCH TAB------------- */}
      <div className="flex flex-wrap justify-between items-center p-4 gap-5 sm:w-5/6 w-11/12 h-16 bg-gradient-to-b from-purple-950  to-violet-600 rounded-t-lg">
        <CgMenuRound className="text-3xl font-semibold text-slate-200" />
        <div className="w-3/4">
          <Input
            disabled={true}
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-black",
                "text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-black",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "group-data-[focus=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <ImSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <h1 className={`text-2xl text-white font-semibold ${bebas.className}`}>
          CoderHouse
        </h1>
      </div>

      {/*-----------BROWSER WINDOW TEXT------------- */}
      <div className="relative flex justify-between items-end p-4 gap-5 sm:w-5/6 w-11/12 h-[500px] bg-black">
        <div
          id="text"
          className="absolute top-0 flex flex-col p-4 justify-center items-center gap-8"
        >
          <h1 className="text-4xl font-semibold text-purple-300 pr-10 pl-10">
            Step into programming mastery
          </h1>
          <p className="text-white text-xl pr-10 pl-10">
            Explore, create, and excel with our comprehensive coding platform.
            Your journey to becoming a coding expert starts here!
          </p>
        </div>
        <div className="absolute bottom-[-70px]">
          <Image
            alt="Coder Student"
            src={CoderStudent}
            className=" min-h-[150px] max-h-[401px] h-auto object-fill"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Browser;

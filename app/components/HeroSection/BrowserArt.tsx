"use client";
import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { Input } from "@nextui-org/input";
import { Indie_Flower } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import CoderStudent from "../../../public/coder.png";

const indieFlower = Indie_Flower({ subsets: ["latin"], weight: ["400"] });

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
      <div className="flex justify-between items-center p-4 gap-5 sm:w-5/6 w-11/12 h-16 bg-gradient-to-b from-purple-950  to-violet-600 rounded-t-lg">
        <CgMenuRound className="text-3xl font-semibold" />
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
        <h1
          className={`text-2xl text-white font-semibold ${indieFlower.className}`}
        >
          CoderHouse
        </h1>
      </div>

      {/*-----------BROWSER WINDOW TEXT------------- */}
      <div className="relative  flex justify-between items-end p-4 gap-5 sm:w-5/6 w-11/12 h-[500px] bg-black">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image alt="Coder Student" src={CoderStudent} />
        </div>
      </div>
    </motion.div>
  );
};

export default Browser;

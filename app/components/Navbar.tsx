"use client";
import Link from "next/link";
import Image from "next/image";
import codeLogo from "../../public/logo.png";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  return (
    <motion.header className="flex items-center justify-between  lg:max-w-7xl lg:mx-auto max-w-full px-8 flex-wrap w-full p-4">
      {/*-------------------------------LOGO----------------------------- */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link href="/" className="flex items-center gap-2 mt-2 ">
          <Image
            src={codeLogo}
            alt="Coder House Logo"
            className="sm:w-10 sm:h-9 w-7 h-6 "
          />
          <h1
            className={`text-white font-semibold sm:text-2xl text-lg ${kanit.className}`}
          >
            CoderHouse
          </h1>
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

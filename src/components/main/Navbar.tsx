import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/navic.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Shahriar Abir
          </span>
        </Link>

        <div className="w-[500px] h-full sm:flex flex-row items-center justify-between md:mr-20 hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link
              href="#skills"
              className="cursor-pointer hover:text-green-400"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="cursor-pointer hover:text-green-400"
            >
              Projects
            </Link>
            <Link
              href="#certificates"
              className="cursor-pointer hover:text-green-400"
            >
              Certificates
            </Link>
            <Link
              href="#experiences"
              className="cursor-pointer hover:text-green-400"
            >
              Experiences
            </Link>

            <Link
              href="#about-me"
              className="cursor-pointer hover:text-green-400"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="transform transition-transform hover:scale-110"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

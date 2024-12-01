import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-full bottom-0 bg-transparent text-gray-200 shadow-lg p-[15px] z-50 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Community
            </div>
            <Link
              href="https://www.linkedin.com/in/shahriar-1905008-abir/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </Link>
            <Link
              href="https://github.com/shahriarabir1"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Social Media
            </div>
            <Link
              href="https://www.facebook.com/shahriar.abir.eng.262000?mibextid=ZbWKwL"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </Link>
            <Link
              href="https://x.com/Shahriar_Abir_"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </Link>
            <Link
              href="discordapp.com/users/1251780998283264176"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              About
            </div>
            <Link
              href="https://www.facebook.com/iio.infinity.io"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                Founder of Infinity.io
              </span>
            </Link>
            <Link
              href="/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Information about me</span>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                shahriarabirjob@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Raqami Universe 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

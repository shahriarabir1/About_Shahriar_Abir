import Link from "next/link";
import React, { ReactNode } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
interface Props {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
  cls: string;
  con: string;
}

const ContactCard = ({
  title,
  description,
  link,
  children,
  cls,
  con,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      <div
        className="text-6xl py-4 flex justify-center "
        style={{ color: cls }}
      >
        {children}
      </div>

      <div className="relative p-4 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        {/* View More Button */}
        <Link
          href={link}
          className="mt-4 w-[60%] inline-block text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-4 rounded-full font-semibold hover:scale-110 transition duration-300 ease-in"
        >
          {con}
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;

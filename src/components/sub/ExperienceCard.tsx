import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  height: number;
  width: number;
}

const ExperienceCard = ({
  src,
  title,
  description,
  link,
  height,
  width,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      <Image
        src={`/experiences/${src}`}
        alt={title}
        width={width}
        height={height}
        className="p-5"
      />

      <div className="relative p-4 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        {/* View More Button */}
        <Link
          href={link}
          className="w-full text-center text-white bg-gradient-to-r from-green-500 to-blue-500 py-2 px-4 rounded-full font-semibold hover:scale-105 transition duration-300 ease-in"
        >
          Visit Site
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;

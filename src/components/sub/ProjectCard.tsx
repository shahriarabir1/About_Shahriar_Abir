import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
interface Props {
  src: string[];
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col">
      <Image
        src={`/projects/${src[0]}`}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      {/* <Swiper spaceBetween={1} slidesPerView={1} className="w-full h-[60%]">
        {src.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/projects/${image}`}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div className="relative p-4 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>

        {/* View More Button */}
        <Link
          href={link}
          className="mt-4 w-[25%] inline-block text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-4 rounded-full font-semibold hover:scale-110 transition duration-300 ease-in"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

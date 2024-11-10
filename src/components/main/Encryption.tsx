"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { certificates } from "@/constants/certificates";
import ReactPaginate from "react-paginate";
const Encryption = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Handle lock click
  const handleLockClick = () => {
    setIsUnlocked(true); // Set to true to hide lock and show centered image div
  };
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Total pages
  const totalPages = Math.ceil(certificates.length / projectsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newOffset =
      (selectedPage.selected * projectsPerPage) % certificates.length;
    console.log(
      `User requested page number ${selectedPage.selected}, which is offset ${newOffset}`
    );
    setCurrentPage(newOffset);

    // Update the current page index based on selected page
    setCurrentPage(selectedPage.selected + 1); // react-paginate uses 0-based index
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = certificates.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  return (
    <div
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"
      id="certificates"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Award
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Certificates
        </motion.div>
      </div>

      {/* Lock section */}
      {!isUnlocked && (
        <div
          onClick={handleLockClick}
          className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] cursor-pointer"
        >
          <div className="flex flex-col items-center group w-auto h-auto">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className="z-10"
            />
          </div>

          <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Click to unlock</h1>
          </div>
        </div>
      )}

      {/* Centered Image Div after Unlock */}
      {isUnlocked && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-[20] flex flex-col items-center justify-center"
        >
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            {currentProjects.map((item, index) => (
              <div key={index}>
                <Image
                  src={`/certificate/${item.src}`}
                  alt={item?.title}
                  height={500}
                  width={500}
                />
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={totalPages} // Total number of pages
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={
              "pagination flex gap-4 mt-10 text-white bg-gradient-to-r from-black to-blue-500 py-2 px-4 rounded-full font-semibold p-4"
            }
            pageClassName={"page-item"}
            activeClassName={"active"}
            disabledClassName={"disabled"}
          />
        </motion.div>
      )}

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Certified Engineer
        </div>
      </div>

      {/* Video Background */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;

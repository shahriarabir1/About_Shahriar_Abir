"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "../../constants/projects";
import ReactPaginate from "react-paginate";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newOffset =
      (selectedPage.selected * projectsPerPage) % projects.length;
    console.log(
      `User requested page number ${selectedPage.selected}, which is offset ${newOffset}`
    );
    setCurrentPage(newOffset);

    // Update the current page index based on selected page
    setCurrentPage(selectedPage.selected + 1); // react-paginate uses 0-based index
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div
      className="relative z-[30] flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {currentProjects.map((item, index) => (
          <ProjectCard
            src={item.src}
            title={item.title}
            description={item.description}
            link={item.link}
            key={index}
          />
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages} // Total number of pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={
          "pagination flex gap-4 mt-10 text-white bg-gradient-to-r from-red-500 to-blue-500 py-2 px-4 rounded-full font-semibold p-4"
        }
        pageClassName={"page-item"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
      />
      {currentPage === totalPages && (
        <a
          href="https://github.com/shahriarabir1/"
          className="mt-6 inline-block text-center text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-6 rounded-full font-semibold hover:scale-110 transition duration-300 ease-in"
        >
          See More
        </a>
      )}
    </div>
  );
};

export default Projects;

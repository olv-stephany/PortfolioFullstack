import React, { useState } from "react";
import vibraniumImage from "../images/projects/v-api.jpg";
import { FiChevronRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image: vibraniumImage,
    title: "VibraniumCore-API",
    tags: [
      { id: 1, tag: "Back-end" },
      { id: 2, tag: "APIREST" },
      { id: 3, tag: "Node.js" },
      { id: 4, tag: "PrismaORM" },
    ],
  },
  {
    id: 2,
    image: vibraniumImage,
    title: "Projeto 2",
    tags: [
      { id: 1, tag: "Back-end" },
      { id: 2, tag: "APIREST" },
      { id: 3, tag: "Node.js" },
      { id: 4, tag: "PrismaORM" },
    ],
  },
  {
    id: 3,
    image: vibraniumImage,
    title: "Projeto 3",
    tags: [
      { id: 1, tag: "Back-end" },
      { id: 2, tag: "APIREST" },
      { id: 3, tag: "Node.js" },
      { id: 4, tag: "PrismaORM" },
    ],
  },
];

const CardsProjects = () => {
  return (
    <div className="flex justify-center mt-15 w-full gap-5">
      {projects.map((project) => (
        <div key={project.id} className="p-5 pt-0 ">
          <div className="project-container bg-[#d9d9d9] rounded-lg h-[370px] w-[360px]">
            <div className="project-header">
              <div className="justify-center items-center flex flex-col">
                <img
                  src={project.image}
                  alt=""
                  className=" object-cover flex justify-center w-[300px] h-[150px] mt-5 rounded-lg"
                />
              </div>
              <h2 className="lg:text-xl italic font-bold text-black text-start ml-5 p-2.5 pl-2">
                {project.title}
              </h2>
            </div>
            <div className="project-body">
              <div className="flex flex-wrap justify-start ml-5 mr-5 pl-2 pr-2 gap-4">
                {project.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className=" bg-[#AA9D8A] pl-6 pr-9 rounded-sm m-0 "
                  >
                    <p className="text-start flex">{tag.tag}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mr-5 mt-10">
                <button
                  to={`/projetos/${project.id}`}
                  className="bg-[#AA9D8A] rounded-md pl-20 p-2 hover:bg-[#9a8d7c] transition flex items-center"
                >
                  <FiChevronRight className="text-white text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsProjects;

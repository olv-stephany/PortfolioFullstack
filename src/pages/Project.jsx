import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import projectsdata from "../data/projectsdata";

import { FaChevronLeft } from "react-icons/fa";

const Project = () => {
  const { id } = useParams(); //id recolhido da url(dynamic route)
  const project = projectsdata.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="project-container">
      <div
        className="project-header bg-[#AA9D8A] w-full h-[25vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.banner})` }}
      >
        <div className="pt-5 pl-5">
          <Link to="/">
            <button className="cursor-pointer bg-[#6F7B98] p-3 md:p-5 text-[#fff] flex rounded-4xl">
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>
          </Link>
        </div>
      </div>

      <div className="project-body px-4 md:px-8 lg:px-10">
        <h1 className="font-bold flex justify-start text-3xl mb-5 lg:px-25 lg:py-2 mt-8">
          {project.nameProject}
        </h1>

        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-25">
          <div className="images-project-container border-4 w-full lg:w-[650px] border-[#6F7B98] rounded-lg xl:h-[50vh]">
            <div className="mx-4 md:mx-10 flex-col justify-center items-center flex">
              <h2 className="text-base md:text-lg bg-[#6F7B98] md:w-[220px] w-[160px] mt-4 mb-4 rounded-sm text-[#ffffffda] font-medium text-center">
                Galeria do projeto
              </h2>
            </div>

            <div className="images-project-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-5 mb-4">
              {project.imagesProject.map((img) => (
                <div key={img.id} className="">
                  <img
                    src={img.url}
                    alt=""
                    className="w-full  h-[120px] sm:h-[150px] md:h-[80px] object-cover rounded-xl cursor-pointer 
                    transform transition-transform duration-300 hover:scale-110"
                    onClick={() => setSelectedImage(img.url)}
                  />
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black  flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)} //volta ao estado padrao(fecha ao clicar fora)
            >
              <button
                className="absolute top-8 right-8 text-white text-2xl font-bold  bg-[#6F7B98] px-6 py-5 flex rounded-4xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="relative max-w-4xl w-full p-4">
                <img
                  src={selectedImage}
                  alt=""
                  className="w-full max-h-[80vh] object-contain rounded-xl "
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          )}

          <div className="details-container border-4 w-full lg:w-auto border-[#6F7B98] rounded-lg mb-[10dvh]">
            <div className="mx-4 md:mx-15 flex-col justify-center items-center flex">
              <h3 className="text-lg md:text-xl font-medium bg-[#6F7B98] w-[160px] md:w-[200px] mt-4 mb-4 rounded-sm text-[#ffffffda] text-center">
                Mais Detalhes
              </h3>
              <p className="text-start md:text-lg text-base font-semibold mb-10 text-black md:mb-20">
                {project.description}
              </p>
            </div>

            <div className="border-4 mx-4 md:mx-10 mb-6 h-auto border-[#AA9D8A] rounded-lg p-2">
              <span className="flex flex-col sm:flex-row justify-center sm:justify-around gap-3 sm:gap-0">
                {project.links.map((link) => (
                  <button
                    key={link.id}
                    className="flex bg-[#AA9D8A] px-6 rounded-md gap-2 items-center justify-center 
                  hover:scale-102 hover:shadow-lg transition-all duration-300"
                  >
                    <img src={link.icon} alt="" className="w-8 " />
                    <a href={link.url} target="_blank">
                      <p className="text-sm md:text-md font-semibold text-[#ffffffda]">
                        {link.title}
                      </p>
                    </a>
                  </button>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

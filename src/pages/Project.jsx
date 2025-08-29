import React from "react";
import { useParams, Link } from "react-router-dom";

import projectsdata from "../data/projectsdata";

import { FaChevronLeft } from "react-icons/fa";

const Project = () => {
  const { id } = useParams(); //id recolhido da url(dynamic route)
  const project = projectsdata.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Projeto não encontrado 🚨</h2>;
  }

  return (
    <section className="project-container">
      <div
        className="project-header bg-[#AA9D8A] w-screen h-[25vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.banner})` }}
      >
        <div className="pt-5 pl-5">
          <Link to="/">
            <button className="cursor-pointer bg-[#6F7B98] p-5 text-[#fff] justify-start flex rounded-4xl">
              <FaChevronLeft className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
      <div className="project-body">
        <h1 className="font-bold flex justify-start text-3xl mb-5 lg:px-25 lg:py-2 mt-8">
          {project.nameProject}
        </h1>

        <div className="flex justify-center lg:mx-25 gap-10">
          <div className="images-project-container border-4 w-[650px] border-[#6F7B98] rounded-lg">
            <h2>Galeria do projeto</h2>

            <div className="images-project-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-5 mb-5">
              {project.imagesProject.map((img) => (
                <div key={img.id} className="">
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-[100px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="details-container border-4 w-screen border-[#6F7B98] rounded-lg">
            <div className="px-10">
              <h3>Mais Detalhes</h3>
              <p className="text-start">{project.description}</p>
            </div>

            <span >
              {project.links.map((link) => (
                <button key={link.id} className="flex">
                  <img src={link.icon} alt="" />
                  <a href={link.url} target="_blank">
                    <p>{link.title}</p>
                  </a>
                </button>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

import React, { useState } from "react";

import line from "../images/line-of-time.png";

import { FaChevronDown } from "react-icons/fa";

const ExperienceCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-sm pl-4 pt-2 border-3 border-white/100  w-170 text-white">
      <h3 className="text-2xl font-medium italic text-start mb-2">
        Experiências
      </h3>

      <div className="flex items-start gap-3 pl-5">
        <div className="flex flex-col items-center pt-1">
          <img className="pb-5" src={line} alt="" />
        </div>

        <div className="flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left flex items-center gap-4"
          >
            <p className="font-semibold">
              Capacita TIC20 (UECE/ Atlântico) – Projeto Fullstack com foco em
              Dashboard
            </p>
            <span
              className={`text-white text-xl transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <FaChevronDown />
            </span>
          </button>

          {isOpen && (
            <ul className="mt-1 text-sm font-medium text-white/90 list-disc list-inside space-y-1 text-start mb-10">
              <li>
                <span>Responsável por front-end e design UI/UX</span>
              </li>
              <li>
                <span>
                  Reuniões semanais e colaboração em equipe multidisciplinar
                </span>
              </li>
              <li>
                <span>
                  Aprendizado prático com versionamento utilizando Git e
                  Bitbucket
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

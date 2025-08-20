import React, { useState, useRef } from "react";

import line from "../images/line-of-time.png";

import { FaChevronDown } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const ExperienceCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  //animação do container de experiencias
  const expRef = useRef(null);
  const expInView = useInView(expRef, { amount: 0.3 });

  const expContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 4.0
      },
    },
  };

  //animação dos itens ao abrir
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={expRef}
      className="rounded-sm pl-4 pt-2 border-3 border-white/100  w-170 text-white"
      variants={expContainerVariants}
      initial="hidden"
      animate={expInView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-medium italic text-start mb-2">
        Experiências
      </h3>

      <div className="flex items-start gap-3 pl-0">
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
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="mt-1 text-sm font-medium text-white/90 list-disc list-inside space-y-1 text-start mb-10"
            >
              {[
                "Responsável por Front-end e Design UI/UX",
                "Reuniões semanais e colaboração em equipe multidisciplinar",
                "Aprendizado prático com versionamento utilizando Git e Bitbucket",
              ].map((desc, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

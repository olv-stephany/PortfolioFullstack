import React, { useRef } from "react";
import "../styles/SoftSkills.css";
import { motion, useInView } from "framer-motion";

const SoftSkills = () => {
  const softSkills = [
    {
      id: 1,
      nome: "Curiosidade e aprendizado",
    },
    {
      id: 2,
      nome: "Atenção aos detalhes",
    },
    {
      id: 3,
      nome: "Trabalho em equipe",
    },
    {
      id: 4,
      nome: "Criatividade",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); 
  //amount == definimos uma porcentagem em decimal para ser disparada

  //animação de cada item surgindo um por um
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, 
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="soft-skills-container lg:mt-8 flex flex-wrap justify-center gap-3 sm:gap-5 lg:gap-9 mt-10 lg:mt-0 text-[#fff]"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView? "visible": "hidden"}
    >
      {softSkills.map((skill) => (
        <motion.p key={skill.id} className="bg-[#6F7B98] px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm lg:px-4 lg:py-2 lg-text-base" variants={item}>
          {skill.nome}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default SoftSkills;

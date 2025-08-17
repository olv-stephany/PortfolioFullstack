import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const paragraphs = [
    "Estudante de Análise e Desenvolvimento de Sistemas, nascida em 16 de março de 2007, apaixonada por transformar ideias em experiências digitais.",
    "Desde pequena sou fascinada pelas tecnologias do universo Marvel, o que despertou meu interesse em criar soluções com propósito e me levou à programação.",
    "Atualmente estudo Desenvolvimento Fullstack, com foco em UI/UX, Front-End moderno e Back-end com Node.js. Gosto de unir lógica, design e empatia para criar interfaces funcionais e intuitivas.",
    "Meu objetivo é crescer profissionalmente, colaborando em projetos reais que impactem positivamente o dia a dia das pessoas."
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="about-body text-start lg:flex">
      <motion.div
        ref={ref}
        className="w-155 text-lg text-[#fff] italic font-medium"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} 
      >
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="mb-5"
            variants={paragraphVariants}
            transition={{ duration: 1.2 }}
          >
            {p}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
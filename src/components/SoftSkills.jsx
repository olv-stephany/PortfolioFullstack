import React from "react";
import "../styles/SoftSkills.css";

const SoftSkills = () => {
  const softSkills = [
    {
      id: 1,
      nome: "Trabalho em equipe",
    },
    {
      id: 2,
      nome: "Criatividade",
    },
    {
      id: 3,
      nome: "Curiosidade e aprendizado",
    },
    {
      id: 4,
      nome: "Atenção aos detalhes",
    },
  ];

  return (
    <div className="soft-skills-container lg:mt-8 flex justify-center gap-7 text-[#fff]">
      {softSkills.map((skill) => (
        <p key={skill.id} className="bg-[#6F7B98]">
          {skill.nome}
        </p>
      ))}
    </div>
  );
};

export default SoftSkills;

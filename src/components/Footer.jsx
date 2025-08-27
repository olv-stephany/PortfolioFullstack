import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const items = [
    { id: 1, name: "Habilidades", to: "skills" },
    { id: 2, name: "Sobre", to: "about" },
    { id: 3, name: "Projetos", to: "projects" },
    { id: 4, name: "Contato", to: "contact" },
  ];
  return (
    <div className="flex flex-col xl:flex-row justify-center text-center gap-5 items-center xl:pt-15">
      <p className="text-[#fff] pt-5 lg:pt-0">© 2025 Stephany Oliveira</p>
      <ul className="flex text-white gap-4 font-medium">
        {items.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

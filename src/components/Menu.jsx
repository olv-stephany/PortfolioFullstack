import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Menu = () => {
  const items = [
    { id: 1, name: "Habilidades", to: "skills" },
    { id: 2, name: "Sobre", to: "about" },
    { id: 3, name: "Projetos", to: "projects" },
    { id: 4, name: "Contato", to: "contact" },
  ];
  return (
    <nav>
      <ul className="flex gap-6  mt-3 justify-center lg:text-2xl text-1xl">
        {items.map((item) => (
          <motion.li
            key={item.id}
            className="relative cursor-pointer font-bold text-gray-700"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { color: "#374151" }, // estado padrao
              hover: { color: "#374151c7" }, // animação/alteração
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/*react-scroll effect */}
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              {item.name}
            </Link>

            {/*border bottom animate */}
            <motion.span
              className="absolute left-1/2 bottom-0 h-[3px] rounded-md bg-[#6F7B98]"
              initial={{ width: 0, x: "-50%" }}
              variants={{
                hover: { width: "100%", x: "-50%" },
                rest: { width: 0, x: "-50%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

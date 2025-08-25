import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const items = ["Habilidades", "Sobre", "Projetos", "Contato"];
  return (
    <ul className="flex gap-6  mt-3 justify-center lg:text-2xl text-1xl">
      {items.map((item, i) => (
        <motion.li
          key={i}
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
          {item}

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
  );
};

export default Menu;

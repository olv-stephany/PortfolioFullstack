import React from "react";
import "../styles/LandingPage.css";
import { motion } from "framer-motion";

//icons
import { FaGithub } from "react-icons/fa";
import { AiOutlineBehanceSquare } from "react-icons/ai";

//components
import FrameSticker from "../components/FrameSticker";
import SoftSkills from "../components/SoftSkills";
import CardsStacks from "../components/CardsStacks";
import ExperienceCard from "../components/ExperienceCard";
import ProfileInfo from "../components/ProfileInfo";
import CardsProjects from "../components/CardsProjects";
import Menu from "../components/Menu";
import About from "../components/About";

//images
import pages from "../images/stickers/pages-sticker.png";
import book from "../images/stickers/book-sticker.png";
import columns from "../images/Vector.png";
import statue from "../images/stickers/statue-sticker.png";

import github from "../images/icons/github-icon-media.png";
import email from "../images/icons/email-icon-media.png";
import linkedin from "../images/icons/linkedin-icon-media.png";

const LandingPage = () => {
  const socialMedia = [
    {
      id: 1,
      image: email,
      link: "https://outlook.live.com/mail/0/deeplink/compose?to=stephanyodev@outlook.com",
      nome: "stephanyodev@outlook.com",
    },
    {
      id: 2,
      image: linkedin,
      link: "www.linkedin.com/in/stephany-oliveira01",
      nome: "Stephany Oliveira",
    },
    {
      id: 3,
      image: github,
      link: "https://github.com/olv-stephany",
      nome: "olv-stephany",
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }} //animação fade in
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="welcome-container"
      >
        <div className="welcome-header">
          <FrameSticker />
        </div>
        <div className="welcome-body flex flex-col lg:justify-center items-center h-screen">
          <h2 className="lg:text-6xl font-bold flex justify-start lg:mr-[20rem]">
            Prazer, eu sou a
          </h2>
          <h1 className="effect lg:text-8xl text-[#6F7B98] font-bold lg:ml-[15rem]">
            Stephany
          </h1>
          <Menu />
        </div>
        <div className="welcome-footer flex opacity-40 justify-end absolute bottom-[2px] right-40">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <AiOutlineBehanceSquare fontSize={"35px"} />
          </a>
          <a
            href="https://github.com/olv-stephany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub fontSize={"30px"} />
          </a>
          <div className="flex flex-col justify-start items-start">
            <p className="text-1xl ml-1 font-bold  lg:text-xl">
              {" "}
              /olv-stephany
            </p>
          </div>
        </div>
      </motion.section>
      <section className="skills-container">
        <div className="skills-header">
          <h2 className="lg:text-5xl font-semibold mt-10 skills-title">Habilidades </h2>
        </div>
        <div className="skills-body">
          <div className="relative z-10">
            <SoftSkills />
            <CardsStacks />
          </div>
          <div className="hidden lg:block z-0 absolute top-[105vh] w-[550px] left-0">
            <img src={pages} alt="" className="object-cover" />
          </div>
          <div className="hidden lg:block z-0 absolute  w-[450px] right-0 top-[145vh] overflow-hidden ">
            <img src={book} alt="" className="w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="about-container bg-[#6F7B98] flex mt-[10vh] w-screen h-screen bg-cover bg-center">
        <div className="justify-center lg:pl-[15rem] lg:pr-[15rem]">
          <div className="about-header flex">
            <h2 className="text-5xl font-semibold italic text-[#fff] p-5 pl-0 mt-[5rem]">
              Sobre mim
            </h2>
            <img src={columns} alt="" className="pt-20 pb-7 pl-80" />
          </div>
          <div className="about-body text-start lg:flex">
            <div>
              <div className="w-155 text-lg text-[#fff] italic font-medium ">
                {/*<p className="mb-5 typing-effect">
                  Estudante de Análise e Desenvolvimento de Sistemas, nascida em
                  16 de março de 2007, apaixonada por transformar ideias em
                  experiências digitais.{" "}
                </p>
                <p className="mb-5 typing-effect">
                  Desde pequena sou fascinada pelas tecnologias do universo
                  Marvel, o que despertou meu interesse em criar soluções com
                  propósito e me levou à programação.
                </p>
                <p className="mb-5 typing-effect">
                  Atualmente estudo Desenvolvimento Fullstack, com foco em
                  UI/UX, Front-End moderno e Back-end com Node.js. Gosto de unir
                  lógica, design e empatia para criar interfaces funcionais e
                  intuitivas.
                </p>
                <p className="mb-5 typing-effect">
                  Meu objetivo é crescer profissionalmente, colaborando em
                  projetos reais que impactem positivamente o dia a dia das
                  pessoas.
                </p>*/}
                <About/>
              </div>
              <ExperienceCard />
            </div>
            <div>
              <ProfileInfo />
            </div>
          </div>
        </div>
      </section>
      <section className="projects-container bg-[#6F7B98] w-screen h-[90vh]">
        <div className="projects-header">
          <h2 className="pt-20 lg:text-5xl font-semibold text-[#fff] italic">
            Projetos
          </h2>
        </div>
        <div className="projects-body">
          <CardsProjects />
        </div>
      </section>
      <section className="contacts-container bg-[#d9d9d9] w-full h-full overflow-x-hidden bg-cover bg-center mt-0">
        <div className="contacts-header ml-[40vw] border-4 border-[#6F7B98] w-[40rem] h-[25rem] top-[5vh] relative bg-[#6f7b9817] p-5 flex-col justify-center flex items-center ">
          <h2 className="font-medium text-3xl p-5 ">Vamos Conversar?</h2>
          <p className="w-[550px] text-lg mb-2 font-medium">
            Se você quiser colaborar, conversar ou tiver interesse no meu
            trabalho, é só me chamar!
          </p>
          <div className="social-media-container">
            {socialMedia.map((social) => (
              <span key={social.id} className="flex pt-3">
                <img src={social.image} alt="" className="mr-[5vh]" />
                <a
                  href={social.link}
                  target="_blank"
                  className="flex items-center font-bold text-lg"
                >
                  {social.nome}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="contacts-body ml-[14vw] mt-0">
          <img src={statue} alt="" />
        </div>
      </section>
      <footer className=" bg-[#333533] w-full bg-cover bg-center h-[15vh]">
        <div className="flex justify-center text-center gap-5 items-center">
          <p className="text-[#fff] pt-10">© 2025 Stephany Oliveira</p>
          <ul className="flex text-white gap-4 font-medium pt-10">
            <li>Habilidades</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

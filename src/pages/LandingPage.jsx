import React from "react";
import "../styles/LandingPage.css";

import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { useRef } from "react";

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
import Footer from "../components/Footer";

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
      link: "https://www.linkedin.com/in/stephany-oliveira01/",
      nome: "linkedin.com/in/stephany-oliveira01",
    },
    {
      id: 3,
      image: github,
      link: "https://github.com/olv-stephany",
      nome: "github.com/olv-stephany",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const itemsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
          <div className="bg-mobile h-[20vh] w-full flex flex-col justify-center items-center">
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold flex justify-start lg:mr-[20rem] sm:mr-[10rem] text-black lg:text-[#333533]">
              Prazer, eu sou a
            </h2>
            <h1 className="effect lg:text-8xl md:text-7xl text-6xl lg:text-[#6F7B98] text-[#2e3850] font-bold lg:ml-[15rem] sm:ml-[10rem]">
              Stephany
            </h1>
          </div>
          <Menu />
        </div>
        <div className="welcome-footer lg:flex opacity-40 lg:justify-end lg:absolute bottom-[2px] lg:right-40 justify-center hidden  lg:visible">
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
      <section className="skills-container -mt-130 lg:mt-0">
        <div id="skills">
          <div className="skills-header">
            <h2 className="text-5xl font-semibold lg:mt-10 sm:mb-10 lg:mb-0 skills-title">
              Habilidades{" "}
            </h2>
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
        </div>
      </section>
      <section className="about-container bg-[#6F7B98] flex flex-col lg:flex-row lg:mt-[10vh] w-full xl:h-screen bg-cover bg-center">
        <div className="w-full px-4 sm:px-8 xl:px-[15rem]">
          <div id="about">
            <div className="about-header flex  items-start lg:items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold italic text-white mt-16 lg:mt-20">
                Sobre mim
              </h2>
              <img
                src={columns}
                alt=""
                className="xl:pt-20 xl:pb-7 lg:pl-80 pl-20 pt-10 "
              />
            </div>
            <div className="about-body flex flex-col lg:flex-row gap-8 mt-8  text-center lg:text-start">
              <div className="">
                <div className="text-white italic font-medium text-base sm:text-lg lg:text-lg lg:w-full ">
                  <About />
                </div>
                <ExperienceCard />
              </div>
              <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:w-10 xl:w-0">
                <ProfileInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-container bg-[#6F7B98] w-full lg:h-[90vh] h-[70vh]">
        <div id="projects">
          <div className="projects-header">
            <h2 className="lg:pt-20 pt-10 lg:text-5xl font-semibold text-[#fff] italic text-4xl">
              Projetos
            </h2>
          </div>
          <div className="projects-body">
            <CardsProjects />
          </div>
        </div>
      </section>
      <section className="contacts-container bg-[#d9d9d9] w-full h-full overflow-x-hidden bg-cover bg-center mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10">
        <div id="contact">
          <div className="flex flex-col lg:flex-row-reverse max-w-[80%] lg:max-w-[60rem] mx-auto gap-10">
            <div
              className="contacts-header 
            border-4 border-[#6F7B98] 
            bg-[#6f7b9817] p-5 flex flex-col justify-center items-center
            relative
            w-full max-w-[45rem] h-auto 
            mx-auto mt-6 
            lg:mt-[5vh] lg:h-[25rem] lg:w-[40rem]  "
            >
              <h2 className="font-medium text-2xl lg:text-3xl p-5 text-center">
                Vamos Conversar?
              </h2>
              <p className="text-base lg:text-lg mb-2 font-medium text-center lg:w-[550px] w-full">
                Se você quiser colaborar, conversar ou tiver interesse no meu
                trabalho, é só me chamar!
              </p>
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="social-media-container"
              >
                {socialMedia.map((social) => (
                  <motion.span
                    key={social.id}
                    className="flex pt-3"
                    variants={itemsVariants}
                  >
                    <img src={social.image} alt="" className="mr-[5vh]" />
                    <a
                      href={social.link}
                      target="_blank"
                      className="flex items-center font-bold lg:text-lg text-sm "
                    >
                      {social.nome}
                    </a>
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="contacts-body flex justify-center mt-10 lg:mt-[50vh]">
              <img
                src={statue}
                alt=""
                className="max-w-[80%] lg:max-w-[30rem] "
              />
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-[#333533] w-screen bg-cover bg-center h-[15vh]">
        <Footer/>
      </footer>
    </>
  );
};

export default LandingPage;

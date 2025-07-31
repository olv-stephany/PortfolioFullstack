import React from 'react'
import "../styles/LandingPage.css"

//icons
import { FaGithub } from "react-icons/fa";
import { AiOutlineBehanceSquare } from "react-icons/ai";

//components
import FrameSticker from '../components/FrameSticker';
import SoftSkills from '../components/SoftSkills';
import CardsStacks from '../components/CardsStacks';

//images
import pages from "../images/stickers/pages-sticker.png"
import book from "../images/stickers/book-sticker.png"

const LandingPage = () => {
  return (
    <div className='container' >
      <section className="welcome-container">
        <div className="images-wall-container">
          <FrameSticker />
        </div>
        <div className="info-welcome-container relative z-20 text-center px-4 fade-in">
          <h2 className="text-xl md:text-6xl mr-170 font-bold text-gray-800">
            Prazer, eu sou a
          </h2>
          <div className="positionEffect">
            <h1 className="text-4xl md:text-8xl mt-2 font-bold text-[#6F7B98] effect">Stephany</h1>
          </div>
          <ul className='navegation-container flex mr-80 justify-center gap-6 mt-5 text-xl md:text font-bold italic fade-in-navegation'>
            <li>Habilidades</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="social-media-container flex justify-end mt-5 relative text-gray-500 fade-in">
          <a href='#'
            target="_blank" rel="noopener noreferrer" style={{ fontSize: "35px" }}>
            <AiOutlineBehanceSquare />
          </a>
          <a href='https://github.com/olv-stephany'
            target="_blank" rel="noopener noreferrer" style={{ fontSize: "33px" }}>
            <FaGithub />
          </a>
          <p className='mt-1 text-1xl ml-1 font-bold'> /olv-stephany</p>
        </div>
      </section>
      <section className="skills-container relative">
        <h2 className='mt-10 md:text-5xl font-medium text-gray-800'>Habilidades</h2>
        <SoftSkills />
        <CardsStacks />
        <img
          src={pages}
          className="absolute top-[-40px] left-[-245px] w-110 rotate-[-10deg] pointer-events-none z-[-10]"
          alt="" />
        <img src={book} alt=""
          className="absolute top-[40vh] right-[-231px] w-120 pointer-events-none z-[-10]" />
      </section>
      <section className="about-container relative">
        <h2>Sobre</h2>
      </section>
    </div>
  )
}

export default LandingPage
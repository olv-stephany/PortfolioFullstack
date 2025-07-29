import React from 'react'
import "../styles/LandingPage.css"

//images
import WallLeft from "../images/sticker-wall-blue-left.png"
import WallRight from "../images/sticker-wall-blue-right.png"

const LandingPage = () => {
  return (
    <div className='container' >
      <section className="welcome-container">

        <div className="images-wall-container"> {/*talvez eu transforme isso em container, aumentar a qualidade das molduras */}
          <img src={WallLeft} alt="parede azul posicionada na esquerda detalhada em relevos de flores" className='absolute top-6 left-0 h-screen w-auto object-cover z-10 fade-in' />
          <img src={WallRight} alt="parede azul posicionada na direita detalhada em relevos de flores" className='absolute top-0 right-0 h-screen w-auto object-cover z-10 fade-in' />
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

      </section>
    </div>
  )
}

export default LandingPage
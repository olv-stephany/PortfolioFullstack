import React from 'react'
import "../styles/CardsStacks.css"

//images
import figma from "../images/figma-icon.png"
import react from "../images/icons/react-icon.png"
import bootstrap from "../images/icons/bootstrap-icon.png"
import css from "../images/icons/css-icon.png"
import git from "../images/icons/git-icon.png"
import github from "../images/icons/github-icon.png"
import javascript from "../images/icons/javascript-icon.png"
import html from "../images/icons/html-icon.png"
import node from "../images/icons/node-icon.png"
import express from "../images/icons/express-icon.png"
import jwt from "../images/icons/jwt-icon.png"
import insomnia from "../images/icons/insomnia-icon.png"
import prisma from "../images/icons/prisma-icon.png"
import postgres from "../images/icons/postgres-icon.png"

//icon
import { FaCircle } from "react-icons/fa";

const CardsStacks = () => {
    const designSkills = [
        { id: 1, nome: "Prototipação e Design Responsivo" },
        { id: 2, nome: "Arquitetura da informação" },
        { id: 3, nome: "Wireframe e Design de Interação" },
    ]

    const frontIcons = [
        { id: 1, image: html, alt: "icon de tecnologia de estruturação de paginas, html" },
        { id: 2, image: css, alt: "icon de tecnologia de estilização de paginas, css" },
        { id: 3, image: bootstrap, alt: "icon de biblioteca de estilização de paginas, bootstrap" },
        { id: 4, image: javascript, alt: "icon de linguagem de programação, javascript" },
        { id: 5, image: react, alt: "icon de framework de estilização, react" },
        { id: 6, image: git, alt: "icon de tecnologia de versionamento de diretorios, git" },
        { id: 7, image: github, alt: "icon de tecnologia de repositorios remotos, github" },
    ]

    const backIcons = [
        { id: 1, image: node, alt: "icon de tecnologia de estruturação de paginas, html" },
        { id: 2, image: express, alt: "icon de tecnologia de estilização de paginas, css" },
        { id: 3, image: insomnia, alt: "icon de linguagem de programação, javascript" },
        { id: 5, image: prisma, alt: "icon de framework de estilização, react" },
        { id: 6, image: postgres, alt: "icon de tecnologia de versionamento de diretorios, git" },
        { id: 4, image: jwt, alt: "icon de biblioteca de estilização de paginas, bootstrap" },
    ]

    return (
        <div className='stacks-container justify-center mt-5 flex gap-8'>
            <div className="ui-container">
                <h2>UI/UX Design</h2>
                <div className="info">
                    <span className='flex gap-3 ml-5'>
                        <img src={figma} alt="icon do software de prototipação, figma" />
                        <p className='figma-title'>Figma</p>
                    </span>
                    <div className="more-details-container mt-4">
                        {designSkills.map(skill => (
                            <div key={skill.id} className="flex items-center gap-5 mb-5">
                                <FaCircle className=" text-[#AA9D8A]" style={{ fontSize: "10px" }} />
                                <p>{skill.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="frontend-container">
                <h2>Front-End</h2>
                <div className="info">
                    <div className=' gap-5 flex flex-wrap icon-grid ml-5'>
                        {frontIcons.map(icon => (
                            <img key={icon.id} src={icon.image} alt={icon.alt}></img>
                        ))}
                    </div>
                    <div className="more-details-container flex items-center gap-5 mb-5 mt-5">
                        <FaCircle className=" text-[#AA9D8A]" style={{ fontSize: "10px" }} />
                        <p>Responsividade e Acessibilidade</p>
                    </div>
                </div>
            </div>
            <div className="backend-container">
                <h2>Back-End</h2>
                <div className=' gap-6 flex flex-wrap icon-grid ml-10'>
                    {backIcons.map(icon => (
                        <img key={icon.id} src={icon.image} alt={icon.alt}></img>
                    ))}
                </div>
                <div className="more-details-container ml-4">
                    <div className="flex items-center gap-5 mb-2 mt-6">
                        <FaCircle className=" text-[#AA9D8A]" style={{ fontSize: "10px" }} />
                        <p>APIs RESTful</p>
                    </div>
                    <div className=" flex items-center gap-5 mb-5">
                        <FaCircle className=" text-[#AA9D8A]" style={{ fontSize: "10px" }} />
                        <p>CRUDS e MVC Pattern</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsStacks
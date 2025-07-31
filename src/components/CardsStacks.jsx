import React from 'react'

//images
import figma from "../images/figma-icon.png"

const CardsStacks = () => {
    const designSkills = [
        { id: 1, nome: "Prototipação e Design Responsivo" },
        { id: 2, nome: "Arquitetura da informação" },
        { id: 3, nome: "Wireframe e Design de Interação" },
    ]
    return (
        <div>
            <div className="ui-container">
                <h2>UI/UX Design</h2>
                <img src={figma} alt="icon do software de prototipação, figma" />
                {designSkills.map(skill => (
                    <p key={skill.id}>
                        {skill.nome}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default CardsStacks
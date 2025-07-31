import React from 'react'
import "../styles/SoftSkills.css"
import softSkills from '../data/SoftSkills'

const SoftSkills = () => {
    return (
        <div className='soft-skills-container mt-15 flex justify-center gap-7 text-[#D9D9D9]'>
            {softSkills.map(skill => (
                <p key={skill.id}
                    className='bg-[#6F7B98]'>
                    {skill.nome}
                </p>
            ))}
        </div>
    )
}

export default SoftSkills
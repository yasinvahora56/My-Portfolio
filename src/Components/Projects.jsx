import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const Projects = () => {

    const projectCards = [
        {
            title:"Online Quiz",
            description:"Quiz Application in Yellow",
            link:"https://yasinvahora56.github.io/Online-Quiz-Exam-html-css-js-/",
        },
        {
            title:"Online Mock Test App",
            description:"Online Mock Test App in Blue Theme",
            link:"https://yasinvahora56.github.io/Quiz-App-Audio-Suppoprt/Quiz%20App/",
        },
        {
            title:"Contact App",
            description:"React Base Contact Application",
            link:"https://yasinvahora56.github.io/Online-Exam-Using-html-css-js/",
        },
        {
            title:"EMS Project",
            description:"MERN Full Stack Project",
            link:"https://ems-ircv.vercel.app/",
        },
    ]


  return (
    <div className='flex flex-row gap-4'>
    {projectCards.map((project, index) => (
        <div key={index} className='bg-linear-65 from-purple-200 to-pink-200 p-4 flex flex-row gap-6 justify-center place-items-center rounded-lg'>
        <div>
        <h1 className='font-bold text-1xl'>{project.title}</h1>
        <p className='text-sm'>{project.description}</p>
        </div>
        <div className='text-2xl text-blue-500'>
        <a href={project.link} target="_blank">
        <FaRegArrowAltCircleRight />
        </a>
        </div>
    </div>
    ))}
    </div>
  )
}

export default Projects

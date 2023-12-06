import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import projectList from '../projectList.js'
import Meta from '../components/Meta.jsx'

const Projects = () => {
  return (
    <div className='project-back-image'>
      <Meta title="Project list" />
      <ProjectsContent className="min-h-screen flex flex-col space-y-5" />
    </div>
  )
}

export default Projects

const ProjectsContent = ({ className }) => {
  return (
    <div className={className}>
      <Navbar activeLink="Projects" />
      <p className='text-white text-3xl text-center font-bold my-5'>My Projects</p>
      <div className='lg:px-40 px-10 grid grid-cols-2 gap-5 pb-7'>
        {
          projectList.map((elem, ind) => {
            return <ProjectCard key={ind} id={elem.id} name={elem.name} detail={elem.about[0]} imageUrl={elem.imageUrl} />
          })
        }
      </div>
    </div>
  )
}

const ProjectCard = ({ id, imageUrl, name, detail }) => {

  const navigate = useNavigate()

  const handleprojectDetail = () => {
    navigate(`/project/${id}`)
  }

  return (
    <div className="lg:h-32 lg:backdrop-blur-lg backdrop-blur-3xl lg:shadow-2xl shadow-xl lg:shadow-gray-800 shadow-gray-700 flex lg:flex-row flex-col lg:items-start items-center lg:space-x-5 lg:space-y-0 space-y-5 p-2 rounded-lg cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
      onClick={handleprojectDetail}
    >
          <img className='lg:h-full lg:w-44 h-32 w-full lg:object-cover object-contain rounded-lg' src={imageUrl} alt="" />
          <div>
            <p className='text-white text-2xl exp-font'>{name}</p>
            <p className='text-white exp-font'>{detail}</p>
          </div>
    </div>
  )
}

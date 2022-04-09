import React from 'react'
import Seo from "../components/seo"
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa'

const ProjectDetail = ({    
    url,
    github,
    description,
    title})=> {
  return (
      <>
        
        <div className=" w-full h-full  ">
            <div className=' w-full h-32 bg-green-200'>IMAGENES</div>
            <div className="bg-custom-white w-fullflex font-bold text-custom-blue-prussian text-3xl p-4 ">{title}</div>
            <div className='bg-custom-white w-full h-auto text-custom-blue-prussian p-4 text-lg font-medium text-justify '>{description}</div>
            <div className='flex w-full h-auto justify-center md:justify-start my-5 p-2'>
                <button className='mx-2 max-w-md bg-gray-400 text-custom-aguamarina-100 rounded-full font-bold p-4'>
                    <FaGithub className='w-8 h-8 mx-2 text-custom-aguamarina-10 opacity-75 hover:opacity-100 focus:opacity-100  cursor-pointer' title='GitHub'/>
                    GitHub
                </button>
                <button className='mx-2 bg-gray-400 text-custom-aguamarina-100 rounded-full font-bold p-4'>{'live preview'}</button>
            </div>

        </div>
    
        
    </>
  )
}

export default ProjectDetail
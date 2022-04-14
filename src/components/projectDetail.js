import React from 'react'
import Seo from "../components/seo"
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa'
import {MdPreview} from 'react-icons/md'
import {GatsbyImage} from 'gatsby-plugin-image'

const ProjectDetail = ({    
    url,
    github,
    description,
    image,
    title})=> {
  return (
      <>
        
        <div className="  flex  flex-col  bg-custom-white  ">
        <div className=" font-bold bg-gradient-to-r  from-custom-blue-prussian to-custom-dark-slate-gray   text-white text-3xl md:text-4xl py-2 pl-8 ">{title}</div>
            <div className='flex h-auto justify-center overflow-hidden '>
                <div className='flex relative  h-auto   bg-cover'>
                    <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt="cover image project"  />
                </div>
            </div>

            
            <div className=' w-full h-auto text-custom-blue-prussian p-6 md:px-10 text-lg font-medium text-justify '>{description}</div>
            <div className='flex flex-row  w-full h-auto justify-center  my-5 p-2'>
                { github ?

                <a href={github} target="blank" rel="noreferrer " className='group block max-w-xs mx-2  rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-custom-blue-prussian hover:ring-custom-blue-prussian'>
                    
                        <div className='flex items-center space-x-3'>
                            
                                
                                    <FaGithub className='w-10 h-10   group-hover:text-custom-green-turquese-100 ' title='GitHub'/>
                                
                                    <h3 class="text-slate-900 group-hover:text-white text-lg font-semibold">Github</h3>

                           
                        </div>
                        <p class="text-slate-500 group-hover:text-white text-lg">Click to visit the github repo for this project.</p>
                    
                    </a>
                    

                : ""
                                
                }
                { url  ?

                        <a href={url} target="blank" rel="noreferrer " className='group block max-w-xs mx-2 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-custom-blue-prussian hover:ring-custom-blue-prussian'>
                                            
                        <div className='flex items-center space-x-3'>
                            
                                
                                    <MdPreview className='w-10 h-10   group-hover:text-custom-green-turquese-100 ' title='GitHub'/>
                                
                                    <h3 class="text-slate-900 group-hover:text-white text-lg font-semibold">Preview</h3>

                        
                        </div>
                        <p class="text-slate-500 group-hover:text-white text-lg">Click to visit a live preview of this project.</p>

                        </a>
                        : ""
                   
                }

                
            </div>

        </div>
    
        
    </>
  )
}

export default ProjectDetail
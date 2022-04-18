import * as React from "react"
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

const Card= ({image,slug, title, description,tag} )=>{
    return(
        <>
        <Link to={`/projects/${slug}`}>
        <div className="group   flex bg-gray-300 h-32  rounded-xl shadow-md  overflow-hidden m-2 md:m-6 md:h-60  ">
            
            <div className=" flex relative w-full bg-cover  ">
            <GatsbyImage image={image.gatsbyImageData} alt="cover image project" />
                <div className="group-hover:opacity-60 md:group-hover:h-2/5 p-2 absolute bottom-0 h-1/2 md:h-1/4 w-full  bg-gray-700 opacity-30 md:opacity-40 ">
                    
                    <div className="md:group-hover:p-4  text-white font-semibold text-xl md:text-3xl  ">{title}</div>
                </div>
            </div>
            
            
            
        </div>
        </Link>
        </>
    )
}

export default Card
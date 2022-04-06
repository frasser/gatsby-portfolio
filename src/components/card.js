import * as React from "react"
//import {Link} from 'gatsby'
//import Image from 'gatsby-plugin-image'

const Card= ({/*imageData,*/ title, description,tag} )=>{
    return(
        <>
        <div className=" flex bg-gray-300 h-32  rounded-xl shadow-md  overflow-hidden m-2 md:m-6 md:h-60  ">
            
            <div className="flex relative w-full bg-cover bg-gradient-to-br bg-cyan-400">
                <div className="p-4 absolute bottom-0 h-1/2 md:h-1/3  w-full  bg-gray-700 opacity-20">
                    
                    <div className="  text-white font-semibold text-xl md:text-3xl  ">{title}</div>
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default Card
import * as React from "react"
//import {Link} from 'gatsby'
//import Image from 'gatsby-plugin-image'

const Card= (/*{imageData, title, description,tag}*/ )=>{
    return(
        <>
        <div className=" flex bg-gray-300 h-3s2  rounded-xl shadow-md  overflow-hidden m-2 md:m-6 md:h-60  ">
            
            <div className="flex relative w-full bg-cover bg-gradient-to-br bg-cyan-400">
                <div className="p-2 absolute bottom-0 h-1/2 md:h-1/3  w-full  bg-gray-700 opacity-20">
                    <div className="hidden md:flex  text-white font-medium text-sm md:text-lg">Aplicacion android para localizacion y registro de maestros a distancia.</div>
                    <div className="  text-white font-semibold text-lg  md:text-3xl">NAME PROYECT</div>
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default Card
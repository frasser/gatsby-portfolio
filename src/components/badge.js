import * as React from "react"
import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'

const Badge = ()=>{
    return(
        <>
            <div className='flex justify-center  w-full h-auto'>
                <div className='flex flex-col w-4/5 justify-center bg-custom-blue-prussian rounded-lg  m-5 '>
                
                    <div className=' m-5 text-center text-3xl text-gray-100 font-semibold '>¿Do You Like What I Do?</div>
                    <div className=' flex justify-center p-5 '>
                        
                    
                        <button className='p-4 text-xl bg-custom-green-turquese-100 font-semibold text-custom-blue-midnight rounded-full shadow-md'>Contact Me</button>
                    </div>
                    <div className='flex flex-row justify-center py-5'>
                        <div><FaGithub className='w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100  cursor-pointer' title='GitHub'/></div>
                        <div><FaTwitter className='w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100 cursor-pointer' title='Twitter'/></div>
                        <div><FaLinkedin className='w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100 cursor-pointer' title='LinkedIn'/></div>
                    </div>
                    
                    

                </div>
            </div>
        </>
    )
}
export default Badge



/***
 * https://github.com/frasser
 * https://twitter.com/jpfrazzer
 * https://www.linkedin.com/in/juan-pablo-sanchez-frasser-3a4099232/
 * 
 * 
 */
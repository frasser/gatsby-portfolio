import React,{useState} from "react"
import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'
import FormModal from "./formModal"
const Badge = ()=>{

    const [containerState, setContainerState] = useState({
        loading:true,
        error:null,
        modalIsOpen: false
    })

    const handleOpenModal = e =>{
        setContainerState({modalIsOpen:true})
    }

    const handleCloseModal = e =>{
        setContainerState({modalIsOpen: false})
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden'
    }

    

    return(
        <>
            <div className='flex justify-center  w-full h-auto'>
                <div className='flex flex-col w-4/5 justify-center bg-custom-blue-prussian rounded-lg  m-5 '>
                
                    <div className=' m-5 text-center text-3xl text-gray-100 font-semibold '>¿Do You Like What I Do?</div>
                    <div className=' flex justify-center p-5 '>
                        
                    
                        <button onClick={handleOpenModal}  className='transform motion-safe hover:scale-105  p-4 text-xl bg-custom-green-turquese-100 font-semibold text-custom-blue-midnight rounded-full shadow-md'>
                            Contact Me
                        </button>
                        <FormModal
                            isOpen={containerState.modalIsOpen}
                            onClose={handleCloseModal}
                            onAfterOpen={disableScroll}
                        />
                    </div>
                    <div className='flex flex-row justify-center py-5'>
                        <a href='https://github.com/frasser' target="blank" rel="noreferrer " className='group block '>
                                <FaGithub className='transform motion-safe hover:scale-105 w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100  cursor-pointer' title='GitHub'/>
                        </a>
                        <a href='https://twitter.com/jpfrazzer' target="blank" rel="noreferrer " className='group block '>
                                <FaTwitter className='transform motion-safe hover:scale-105 w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100 cursor-pointer' title='Twitter'/>
                        </a>
                        <a href='https://www.linkedin.com/in/juan-pablo-sanchez-frasser-3a4099232/?locale=en_US' target="blank" rel="noreferrer " className='group block '>
                                <FaLinkedin className='transform motion-safe hover:scale-105 w-8 h-8 mx-2 text-gray-100 opacity-75 hover:opacity-100 focus:opacity-100 cursor-pointer' title='LinkedIn'/>
                        </a>
                    </div>
                    
                    

                </div>
            </div>
        </>
    )
}
export default Badge



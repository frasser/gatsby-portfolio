import React from 'react'
import Modal from './modal'

const FormModal = (props) => {
  return (
    <Modal 
        isOpen={props.isOpen}
        onClose={props.onClose}
    >
        <form 
            method='post' 
            name="contact" 
            data-netlify="true" 
            data-netlify-honeypot="bot-fiel" 
            action=""
        >

        <label className="block">
            <span class="block text-sm font-medium text-slate-700">Name</span>
            
            <input type="text" name="name"   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            placeholder="Put your contact name here"
            
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide your contact name .
            </p>
        </label>
        <label className="block">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <input type="email" name="mail" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
            placeholder:italic placeholder:text-slate-400 
            "
            placeholder="you@example.com"
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
            </p>
        </label>
        <label className="block ">
            <span class="block text-sm font-medium text-slate-700">Message</span>
            <textarea type="text" name="message" className="mt-1 block w-full h-32  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
            placeholder:italic placeholder:text-slate-400 
            "
            
            />
            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide your message .
            </p>
        </label>
        <button className='transform motion-safe hover:scale-105 mt-1 px-5 py-2 text-lg bg-custom-green-turquese-100 font-semibold text-custom-blue-midnight rounded-xl'>send</button>

        </form>



    </Modal>
  )
}

export default FormModal
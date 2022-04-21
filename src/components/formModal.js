import React,{useState} from 'react'
import Modal from './modal'



const FormModal = (props) => {

    const endpoint = process.env.STRAPI_API_URL;

    const [submitted, setSubmitted] = useState(false);

    const showThankYou = (
        <div>
            <h1>Thank you!</h1>
            <p>You message was submitted successfully.</p>
            <p>I will answer you as soon as possible. </p>
          <button onClick={() => setSubmitted(false)}>go back</button>
        </div>
      );

      const showForm =  

      
        

      <form 
        method='post' 
        netlify-honeypot="bot-field" 
        data-netlify="true" 
        name="contact"
        action= {`https://getform.io/f/${process.env.FORM_ENDPOINT}`}
      
        >

  <label className="block">
      <span className="block text-sm font-medium text-slate-700">Name</span>
      
      <input type="text" name="name"   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      
      
      "
      placeholder="Put your contact name here"
      required="required"
      
      />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide your contact name .
      </p>
  </label>
  <label className="block">
      <span className="block text-sm font-medium text-slate-700">Email</span>
      <input type="email" name="mail" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
      placeholder:italic placeholder:text-slate-400 
      "
      placeholder="you@example.com"
      required="a valid mail is required"
      />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
      </p>
  </label>
  <label className="block ">
      <span className="block text-sm font-medium text-slate-700">Message</span>
      <textarea type="text" name="message" className="mt-1 block w-full h-32  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-custom-green-turquese-100 focus:ring-1 focus:ring-custom-green-turquese-100
      placeholder:italic placeholder:text-slate-400 
      "
      required="a message is required"
      />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide your message .
      </p>
  </label>
  <button type="submit" onClick={() => setSubmitted(false)}  className='transform motion-safe hover:scale-105 mt-1 px-5 py-2 text-lg bg-custom-green-turquese-100 font-semibold text-custom-blue-midnight rounded-xl'>send</button>
        {
           console.log(`Say hello: ${endpoint}`)
        }
  </form>;
 

  return (
    <Modal 
        isOpen={props.isOpen}
        onClose={props.onClose}
    >
        
        {submitted ? showThankYou : showForm}



    </Modal>
  )
}

export default FormModal



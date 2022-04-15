import React from 'react'
import ReactDOM from 'react-dom'



const Modal = (props) => {

    if (!props.isOpen) {
        return null;
    }

  return ReactDOM.createPortal(
    <div className="fixed z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex flex-col items-center">
    <div className="relative rounded-lg top-32 md:top-24 bg-white w-4/5 md:w-96 p-5">
        <button onClick={props.onClose} className="absolute top-0 right-0 border-0  rounded-tr-md py-2 px-4 text-gray-400 font-semibold bg-soft-blue-100 hover:text-black  ">
         X
        </button>

        {props.children}

    </div>

</div>,
document.getElementById('___gatsby')
  )
}

export default Modal
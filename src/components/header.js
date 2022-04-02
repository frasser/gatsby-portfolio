import * as React from "react"
import PropTypes from "prop-types"
import Logo from'../images/logo.png'




const Header = ({ siteTitle }) => (
  <header className="px-1 bg-custom-blue-prussian border-b-transparen ">
    <div className="flex mx-auto w-full   border-b-transparent">
      <div className="flex justify-center w-1/4   ">
        <img src={Logo} alt="logo "  className="w-20 h-20 md:w-24 md:h-24"/>  
      </div>
      <div className="flex justify-around w-3/4 mt-6 sm:justify-center md:justify-end md:mr-5  ">
        <div className="w-auto h-10 text-custom-green-turquese-100  hover:bg-custom-green-turquese-100 rounded-full sm:mr-4 md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-blue-midnight">about me</p>
        </div>
        <div className="w-auto h-10 text-custom-green-turquese-100 hover:bg-custom-green-turquese-100 rounded-full sm:mr-4 md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-blue-midnight">portfolio</p>
        </div>
        <div className="w-auto h-10 text-custom-green-turquese-100 hover:bg-custom-green-turquese-100 rounded-full md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-blue-midnight">contact me</p>
        </div>
          
      </div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

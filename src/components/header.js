import * as React from "react"
import PropTypes from "prop-types"
import Logo from'../images/logo.png'




const Header = ({ siteTitle }) => (
  <header className="px-1   ">
    <div className="flex mx-auto w-full   border-b-transparent">
      {/*<div className="flex justify-center w-1/4   ">
        <img src={Logo} alt="logo "  className="w-20 h-20 md:w-24 md:h-24"/>  
      </div>*/}
      <div className="flex w-full mt-6  justify-end md:mr-5  ">
        <div className="w-auto h-10 text-white border-b-0 hover:border-b-2  hover:border-b-custom-green-turquese-100  sm:mr-4 md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-green-turquese-100">about me</p>
        </div>
        <div className="w-auto h-10 text-white  border-b-0 hover:border-b-2 hover:border-b-custom-green-turquese-100 sm:mr-4 md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-green-turquese-100 ">portfolio</p>
        </div>
        <div className="w-auto h-10 text-white border-b-0 hover:border-b-2 hover:border-b-custom-green-turquese-100 md:cursor-pointer ">
          <p className="p-2 font-medium hover:text-custom-green-turquese-100">contact me</p>
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

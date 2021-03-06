/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"



import Footer from './Footer'
//import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      
      <div className="bg-gray-50 w-full m-auto">
        <main>{children}</main>
        <Footer className="my-0 mx-auto w-full bg-green-400" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

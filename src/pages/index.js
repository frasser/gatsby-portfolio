import React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Portfolio from "../components/portfolio"
import Badge from "../components/badge"
import Brands from '../components/Brands'
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage =()=>{
  
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  
  
  return (
  <Layout>
  <Seo title="Home" />
  <div className="w-full bg-gradient-to-bl  from-custom-blue-prussian via-custom-dark-slate-gray to-custom-blue-prussian h-auto">
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    <div className="p-5 md:mx-20  text-gray-100 text-center">
      <h1 className="  font-bold text-3xl ">
       Hello, There &#x1F44B; <br /> My name is juan pablo sanchez frasser  
        
      </h1>
      <p className="p-5 md:p-8 font-medium text-lg text-justify">
      I'm an electronic engineer and mobile development 
      enthusiast. 
      I enjoy developing experiences in mobile devices for android native and recently with the flutter sdk. also, 
      I have acquired some experience doing personal projects for web with react js and 
      some IoT proyects, interconecting tracking assets with new network ecosistems. <br />
      let me show you some of my skills whit my personal proyects. </p>
      
      
    </div>
  </div>
  <div className="w-full h-auto  my-5">
    <div className="flex w-full h-auto justify-center ">        
      <div className="pb-2 border-b-4 border-custom-green-turquese-100 text-center my-5 text-2xl md:text-3xl text-custom-blue-prussian   font-bold">
         Meet my skills and tools
      </div>
    </div>
    <div className="w-full bg-custom-white ">
    <Brands/>
    </div>
    
    <div className="flex w-full justify-center mt-10 text-3xl text-custom-blue-prussian   font-bold">
    <p>Know my portfolio</p><small className="px-1">&#x1F4BC;</small> 
    </div>
  </div>
  
  <Portfolio/>
  <Badge/>

  


</Layout>
)
}
export default IndexPage

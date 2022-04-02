import * as React from "react"
//import {useStaticQuery, graphql} from 'gatsby'
import Card from "./card";

const Cards =()=>{

  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)*/
  //const proyects = data.SiteTitleQuery

    return(
        <div className="grid gap-2 grid-cols-2  mt-4 ">
            {/*proyects.map(({node:proyect})=>{
                const title = proyect.title;
                const description = proyect.description;
                const tags = proyect.tasgs;
                const imageData = proyect.image.childImagesharp.fluid;
            
                return(
                    <Card
                     title={title} 
                     description= {description}
                     tags={tags}
                     imageData={imageData}
                     />
                )
            })*/}

            

        </div>
    )
}
export default Cards
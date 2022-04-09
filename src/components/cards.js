import * as React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Card from "./card";

const Cards =()=>{

   const query = graphql`
   {
    allStrapiProject {
      nodes {
        title
        id
        slug
        tags {
          title
          strapi_id
        }
        description
      }
    }
  }
  `
  const project = useStaticQuery(query);
  
  const {allStrapiProject: {nodes : pro}} = project
  console.log(pro);
  

    return(
        <div className="grid gap-2 grid-cols-2  mt-4 ">
            {pro.map((pro,index)=>{
                const title = pro.title;
                const description = pro.description;
                const tags = pro.tags;
                const slug= pro.slug
                //const imageData = project.image.childImagesharp.fluid;
            
                return(
                    <Card
                     key={pro.id}
                     title={title} 
                     description= {description}
                     tags={tags}
                     slug={slug}
                     //imageData={imageData}
                     />
                )
            })}

            

        </div>
    )
}
export default Cards
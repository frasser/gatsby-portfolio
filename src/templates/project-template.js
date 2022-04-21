import * as React from  "react"
import { graphql} from "gatsby"


import ProjectDetail from "../components/projectDetail";


export const query =  graphql`
query GetSingleProject($slug: String! )
{
  project: strapiProject(slug: {eq: $slug}) {
    slug
    url
    github
    description
    title
    tags {
      title
      strapi_id
    }
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED,width: 850 , placeholder: BLURRED)
        }
      }
    }
  }
}
`
const ProjectTemplate = ({data})=>{
console.log('here');
const {project } = data
console.log(project);


    return(
        <ProjectDetail {...project}/>

    )
}




export default ProjectTemplate
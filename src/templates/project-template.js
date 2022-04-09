import * as React from  "react";
import { graphql} from "gatsby";

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
  }
}
`
const ProjectTemplate = ({data})=>{
console.log('here');
const {project } = data
console.log(project);

    //console.log(project.title);
    //const p = useStaticQuery(query);
    //console.log(p);
    //const {allStrapiProject: {nodes : pro}} = p
    //console.log('dhjhdjkd');
    //console.log(pro);

    //console.log('aqui');
    //const t = {...context}
    //console.log(t);
    
    return(
        <ProjectDetail {...project}/>

    )
}




export default ProjectTemplate
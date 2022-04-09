const path = require("path")

exports.createPages = async({graphql,actions,reporter})=>{
    const {createPage} = actions
    const projectTemplate = path.resolve(`src/templates/project-template.js`)
    const result = await graphql(`
    {
        allStrapiProject {
          nodes {
            slug
            title
          }
        }
      }
    
    `
    )

    if (result.errors) {
        reporter.panic('there was a problem loading your projects!');
        
        return;
    }
    //const {allStrapiProject: {nodes : pro}} = project
    result.data.allStrapiProject.nodes.forEach(project =>{
        createPage({
            path: `/projects/${project.slug}/`,
            component: projectTemplate,
            context: {
                 slug: project.slug },
            defer: true,
        })
    })
}
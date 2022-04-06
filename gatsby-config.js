/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require('dotenv').config(
   {
     path: `.env.${process.env.NODE_ENV}`,
   }
 );
 //console.log(process.env) 

module.exports = {
  siteMetadata: {
    title: `FRAZZER PORTFOLIO`,
    description: `the frazzer's portfolio web page.`,
    author: `@jpfrazzer`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
        accesToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          `project`,
          `tag`,
          
        ],
        
        queryLimit: 1000,
      },
    },
  ],
}

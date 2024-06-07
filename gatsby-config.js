/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
       options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
      },
    },
  ],
  siteMetadata: {
    title: `Leslie Behum - Web Developer - Brooklyn`,
    description: `Portfolio and blog site for Leslie Behum, a fullstack web devloper based out of Brooklyn, NYC`,
    instagramUsername: `@leslielaurenb`,
    githubUsername: `itsthecheat`,
    siteUrl: `https://www.lesliethe.dev`
  },
}

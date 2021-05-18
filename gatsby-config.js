module.exports = {
  pathPrefix: "/zoff-website",
  siteMetadata: {
    title: `Zoff Kollektiv`,
    description: `Webseite des Zoff Kollektivs`,
    author: `CodeRat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    }
  ],
}

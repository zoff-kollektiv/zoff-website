module.exports = {
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
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
            globPatterns: ['**/*.{js,jpg,png,html,css,woff2,woff}'],
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    }
  ],
}

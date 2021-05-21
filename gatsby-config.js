module.exports = {
  siteMetadata: {
    title: `zoff`,
    description: `kollektiv für visuelle kommunikation `,
    author: `zoff`,
    siteUrl: `https://zoff.coderat.cc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://13991658db384dbf9664e0b432e8914e@sentry.dezim.space/7",
        sampleRate: 0.7,
      },
    },   `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{js,html,css,woff2,woff}"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}

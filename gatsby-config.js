module.exports = {
  siteMetadata: {
    title: "swampyankee",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   

    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};

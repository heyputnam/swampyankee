module.exports = {
  siteMetadata: {
    title: "swampyankee",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "WU40ps_2oszl_1AohokPY-KB8QkIH7Sj54DMGAIowDw",
        spaceId: "hihxahgggvoe",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};

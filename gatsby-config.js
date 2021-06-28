module.exports = {
  siteMetadata: {
    title: "swampyankee",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "7CSOK4qBBkca1W3SwMZ0QS6I8NEpmTCuzdLt4PUzqac",
        spaceId: "7pyo7lilug8d",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};

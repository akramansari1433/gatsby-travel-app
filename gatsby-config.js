/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: `gatsby-travel-app`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: "./src/images/",
         },
         __key: "images",
      },
      "gatsby-plugin-postcss",
   ],
};

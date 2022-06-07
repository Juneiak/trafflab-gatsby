module.exports = {
  siteMetadata: {
    title: `trafflab-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: 'ru',
      langKeyForNull: 'ru',
      useLangKeyLayout: false,
      prefixDefault: true,
    },
  },
]
};
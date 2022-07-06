module.exports = {
  siteMetadata: {
    title: `trafflab-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-anchor-links",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/src/pages/blog`
    },
  },
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: 'en',
      langKeyForNull: 'en',
      useLangKeyLayout: false,
      prefixDefault: true,
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-6TR3D406KP",
      ],
      pluginConfig: {
        head: true,
        respectDNT: false,
      },
    },
  },
]
};

console.log(`${__dirname}/src/markdown-pages`);
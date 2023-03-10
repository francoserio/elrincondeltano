import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `elrincondeltano`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'El Rincon del Tano',
        short_name: 'ERDT',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    }
  ]
};

export default config;

module.exports = {
  siteMetadata: {
    title: 'New York Retina Consultants',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'Matthew Waters',
    doctors: [
      {
        name: 'Peter Weseley',
        link: '/peter-weseley-md',
        style: 'weseley'
      },
      {
        name: 'Alan Dayan',
        link: '/alan-dayan-md',
        style: 'dayan'
      },
      {
        name: 'Steven Agemy',
        link: '/steven-agemy-md',
        style: 'agemy'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/static`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#0cfdd7',
        theme_color: '#0cfdd7',
        display: 'minimal-ui',
        icon: 'src/static/light-bulb-icon.svg' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i', // eslint-disable-line
          'La Belle Aurore:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
          'Caveat: 600i'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
}

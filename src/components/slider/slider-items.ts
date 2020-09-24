export interface ProjectItem {
    title: string
    description: string
    technologies: string[]
    images: string[]
    url: string
}

const description = "Marvel Collections was a full stack project employing Express, React, and some light GraphQL to take care of backend queries and frontend caching. I used Puppeteer to web scrape price information about available comics and online locations of where they could be purchased. Marvel's API is really fun to mess around with. I found that their rich photos made styling easier for this project since comic books almost style themselves!" // prettier-ignore
const technologies = [
    'react',
    'graphql',
    'gatsby',
    'styled components',
    'puppeteer',
    'netlify',
    'apollo'
]
const images = [
    'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/flagged/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1549998724-03a9e93f22f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2680&q=80',
    'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
]

export const projectItems: ProjectItem[] = [
    {
        images: ['https://i.postimg.cc/WzwKHLCw/notpinterest.png', ...images],
        url: 'https://notpinterest-next-prod.herokuapp.com',
        title: 'Notpinterest Clone',
        description,
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/g2mwYZz4/mars-rovers.png',
            'https://i.postimg.cc/T2bhg9hC/Screen-Shot-2020-09-16-at-11-48-59-PM.png',
            'https://i.postimg.cc/m2GkwHHR/Screen-Shot-2020-09-16-at-11-49-20-PM.png',
            'https://i.postimg.cc/Fz0Rv9w2/Screen-Shot-2020-09-16-at-11-50-12-PM.png',
            'https://i.postimg.cc/tCtTm436/Screen-Shot-2020-09-16-at-11-50-49-PM.png'
        ],
        url: 'http://ryasan86.github.io/mars_rovers',
        title: 'Mars Rover Image Browser',
        description:
            "A React frontend application that makes API calls to NASA's open API. This API can sure send a lot of data for being an open API. Anyways, this UI is great if you want to take a look at the latest photos that the mars rovers have to offer. You can filter images by rover, date, and camera type. The UI comes with a custom built slider that can fully rotate both ways.",
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/wvGxLtdK/e-s.png',
            'https://i.postimg.cc/dQhrXr3y/Screen-Shot-2020-09-16-at-11-39-39-PM.png',
            'https://i.postimg.cc/yWqVpwdv/Screen-Shot-2020-09-16-at-11-41-37-PM.png',
            'https://i.postimg.cc/BbPSgqqj/Screen-Shot-2020-09-16-at-11-40-35-PM.png',
            'https://i.postimg.cc/2jghfyLX/Screen-Shot-2020-09-16-at-11-42-09-PM.png'
        ],
        url: 'https://vibrant-leavitt-7a3709.netlify.app',
        title: 'E & S Streetwear Ecommerce Shop',
        description: "E & S is a Fullstack ecommerce application that has everything from front to back. E & S Streetwear utilizes a GraphQL-Yoga server coupled with Prisma to perform all your CRUD operations. Some of the features include a back office component responsible for editing user permissions, Stripe payment gateway, live search as you type autocomplete search bar, cookie based authentication using JWTs, and much more!", // prettier-ignore
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/vTY7gNM2/marvel-collections.png',
            'https://i.postimg.cc/zBSSfrmR/Screen-Shot-2020-09-16-at-11-07-36-PM.png',
            'https://i.postimg.cc/63NfwQPX/Screen-Shot-2020-09-16-at-11-06-10-PM.png',
            'https://i.postimg.cc/N0XkWXpD/Screen-Shot-2020-09-16-at-11-08-39-PM.png',
            'https://i.postimg.cc/dVp9H6mD/Screen-Shot-2020-09-16-at-11-08-57-PM.png'
        ],
        url: 'https://elegant-snyder-2d0543.netlify.app',
        title: 'Marvel Collections Price Scraper',
        description,
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/fRRw2jT4/simon-says-2.png',
            'https://i.postimg.cc/BvyQ1L0r/Screen-Shot-2020-09-17-at-12-02-09-AM.png',
            'https://i.postimg.cc/rmryGVyK/Screen-Shot-2020-09-17-at-12-02-16-AM.png'
        ],
        url: 'https://ryasan86.github.io/simon',
        title: 'Simon Says Game',
        description,
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/26Dp6h1H/Screen-Shot-2020-09-23-at-11-08-28-PM.png',
            'https://i.postimg.cc/wvcCsMJ9/Screen-Shot-2020-09-23-at-11-08-10-PM.png'
        ],
        url: 'http://ryasan86.github.io/react_pizza_builder',
        title: 'Mr. Pizza Builder',
        description: "Mr. Pizza is a create-react-app application with neumorphic inputs. All animations and styling are custom. I used Tailwind CSS for the first time building Mr. Pizza. I gotta say that while Tailwind is amazing, there are some downsides when using it compared to your conventional CSS or CSS in JS. One of them being that your HTML markup becomes a little more bloated since you are using only Tailwind class names to inject styles. That separation of concern when you have individual js and css files is no longer a benefit. Some of the benefits include eliminating specificity and overriding issues and although more bloated, the markup is very simple and easy to read.", // prettier-ignore
        technologies
    },
    {
        images: [
            'https://i.postimg.cc/MKBWZvRn/Screen-Shot-2020-09-17-at-11-34-31-PM.png',
            'https://i.postimg.cc/ryhrSJqt/Screen-Shot-2020-09-24-at-12-10-38-AM.png',
            'https://i.postimg.cc/BbvPr8B6/Screen-Shot-2020-09-24-at-12-11-12-AM.png',
            'https://i.postimg.cc/0jHKP8VC/Screen-Shot-2020-09-24-at-12-11-39-AM.png',
            'https://i.postimg.cc/fTJ059bq/Screen-Shot-2020-09-24-at-12-12-58-AM.png'
        ],
        url: 'https://ryasan86.github.io/100_days_css/?day=1',
        title: '100 Days CSS',
        description,
        technologies
    }
]

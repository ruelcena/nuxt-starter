module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Starter Template',
    titleTemplate: '%s - Project Ready',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [ '@/assets/css/bootstrap.min.css', '@/assets/css/main.css' ],
  /*
  ** Change loading color
  */
  loading: {
    color: '#8bc34a'
  },
  /**
   * Use lru-cache to allow cached components for better render performances
   * */
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vue-cookie'],    
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    TOKEN_AUTH: '',
    API_DOMAIN: '',
    NODE_ENV: 'development',
    HOST: '127.0.0.1',
    PORT: '3000'
  }  
}

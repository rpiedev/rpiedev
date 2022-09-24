module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/main/about',
          permanent: true,
        },
      ]
    },
  }
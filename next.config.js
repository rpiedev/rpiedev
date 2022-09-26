module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/main/resume',
          permanent: true,
        },
      ]
    },
  }
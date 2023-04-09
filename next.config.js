const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/rpiedev/' : '',
  images: {
    unoptimized: true,
  }
}
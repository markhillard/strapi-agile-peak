module.exports = ({ env }) => ({
  url: env('RENDER_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS')
  }
})

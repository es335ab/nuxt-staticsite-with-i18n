module.exports = {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: [
      // en
      '/', '/about', '/users', '/users/:id',

      // fr
      '/fr', '/fr/about', '/fr/users', '/fr/users/:id',

      // ja
      '/ja', '/ja/about', '/ja/users', '/ja/users/:id'
    ]
  }
}

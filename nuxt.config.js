module.exports = {
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/css/functions/_all.scss',
      '@/assets/css/var/_all.scss',
    ]],
  ],
  build: {
    extend (config, { isDev, isClient }) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.options.limit = 100000 // 100kbまでの画像はbase64にする
    },
  },
}

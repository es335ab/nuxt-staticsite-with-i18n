<template lang="pug">
  div.ly-container.is-articles-show
    global-header
    nuxt-link(v-bind:to="articlesIndexUrl") 記事一覧にもどる
    div.container
      h1 {{ pageTitle }}
      div.article-id {{ id }}
      div.article-name {{ title }}
      div.article-content(v-html="content")
</template>

<script>
import articlesData from '~/data/articles.json'
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: '記事詳細' }
  },

  async asyncData({ params, error }) {
    const article = articlesData[params.id]
    return article
  },

  components: {
    GlobalHeader,
  },

  computed: {
    pageTitle() {
      return `${this.title}ってタイトルの記事だよっ！`
    },

    articlesIndexUrl() {
      return '/articles'
    },
  }
}
</script>

<style lang="scss" scoped>
.ly-container.is-articles-show {
  @include clearfix();

  h1 {
    float: left;
    font-size: 14px;
  }
}
</style>

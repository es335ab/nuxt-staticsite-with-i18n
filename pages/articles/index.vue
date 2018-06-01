<template lang="pug">
  div.ly-container.is-articles-index
    global-header
    main.main
      h1 記事一覧
      img.kaiji(src="~/assets/img/icon_test.png")
      div.mod-sample-icon-btn
      div.articles
        div.article-item(
          v-for="article in articles"
          :key="article.id"
        )
          nuxt-link(v-bind:to="articleHref(article.id)")
            div.article-name {{ article.title }}
            div.article-age(v-html="article.content")

</template>

<script>
import articlesData from '~/data/articles.json'
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: '記事一覧' }
  },

  async asyncData() {
    var arr = []
    Object.keys(articlesData).forEach((key) => {
      arr.push(articlesData[key])
    })
    return {
      articles: arr,
    }
  },

  components: {
    GlobalHeader,
  },

  methods: {
    articleHref(id) {
      return `/articles/${id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.ly-container.is-articles-index {
  @include clearfix();

  h1 {
    float: left;
    font-size: 14px;
  }

  img.kaiji {
    width: 50px;
  }

  .articles {
    overflow: hidden;
  }
}
</style>

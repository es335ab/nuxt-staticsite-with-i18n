<template lang="pug">
  div.container.is-users-show
    global-header
    div.container
      h1 {{ pageTitle }}
      div.user-id {{ id }}
      div.user-name {{ name }}
      div.user-age {{ ageWithUnit }}
</template>

<script>
import usersData from '~/data/users.json'
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: 'ユーザー詳細' }
  },

  async asyncData({ params, error }) {

    const user = usersData.filter((item) => { return item.id === Number(params.id) })[0]
    return user
  },

  components: {
    GlobalHeader,
  },

  computed: {
    ageWithUnit() {
      return `${this.age}歳`
    },

    pageTitle() {
      return `${this.name}さんのページだよっ！`
    }
  }
}
</script>

<style lang="scss" scoped>
.container.is-users-show {
  @include clearfix();

  h1 {
    float: left;
    font-size: 14px;
  }
}
</style>

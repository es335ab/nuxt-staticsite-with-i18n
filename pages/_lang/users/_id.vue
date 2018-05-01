<template lang="pug">
  div
    global-header
    div.container
      h1 {{ $t('user.title') }}
      div.user-id {{ id }}
      div.user-name {{ name }}
      div.user-age {{ ageWithUnit }}
</template>

<script>
import usersData from '~/data/users.json'
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: this.$t('user.title') }
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

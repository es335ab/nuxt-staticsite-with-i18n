<template lang="pug">
  div
    global-header
    div.container.is-users-index
      h1 {{ $t('user.title') }}
      div.users
        div.user(
          v-for="user in users"
          :key="user.id"
        )
          p.user-age {{ user.age }}
          p.user-name {{ user.name }}

</template>

<script>
import usersData from '~/data/users.json'
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: this.$t('user.title') }
  },

  async asyncData() {
    return {
      users: usersData,
    }
  },

  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
.container.is-users-index {
  // @include clearfix();

  h1 {
    float: left;
  }

  .users {
    overflow: hidden;
  }
}
</style>

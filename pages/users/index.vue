<template lang="pug">
  div.container.is-users-index
    global-header
    main.main
      h1 ユーザー一覧
      img(src="~/assets/img/kaiji.jpg")
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
    return { title: 'ユーザー一覧' }
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
  @include clearfix();

  h1 {
    float: left;
    font-size: 14px;
  }

  .users {
    overflow: hidden;
  }
}
</style>

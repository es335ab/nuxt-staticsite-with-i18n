<template lang="pug">
  div.Content
    global-header
    div.container
      h1.Content__Title {{ $t('home.title') }}
      p {{ $t('home.introduction') }}
</template>

<script>
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: this.$t('home.title') }
  },
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
.Content {
  .Content__Title {
    font-size: 10px;
  }
}
</style>

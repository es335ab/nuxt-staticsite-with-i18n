<template lang="pug">
  div.Content
    global-header
    div.container
      h1.Content__Title {{ $t('about.title') }}
      p {{ $t('about.introduction') }}
</template>

<script>
import GlobalHeader from '~/layouts/parts/GlobalHeader.vue'

export default {
  head() {
    return { title: this.$t('about.title') }
  },
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
.Content {
  .Content__Title {
    font-size: 100px;
  }
}
</style>

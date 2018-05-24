<template lang="pug">
  div
    global-header
    div.container
      h1.title トップページタイトル
      p トップページdescription
</template>

<script>
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: 'トップページタイトル' }
  },
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
</style>

<template lang="pug">
  div
    global-header
    div.container
      h1.title アバウトタイトル
      p アバウトdescription
</template>

<script>
import GlobalHeader from '~/components/layouts/GlobalHeader.vue'

export default {
  head() {
    return { title: 'アバウトタイトル' }
  },
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
</style>

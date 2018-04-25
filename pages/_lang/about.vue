<template lang="pug">
  div.Content
    div.container
    h1.Content__Title {{ $t('about.title') }}
    p {{ $t('about.introduction') }}
</template>

<script>
export default {
  head() {
    return { title: this.$t('about.title') }
  }
}
</script>

<style lang="scss" scoped>
.Content {
  .Content__Title {
    font-size: 100px;
  }
}

</style>
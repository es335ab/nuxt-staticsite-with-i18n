<template lang="pug">
  div.Content
    div.container
    h1.Content__Title {{ $t('home.title') }}
    p {{ $t('home.introduction') }}
</template>

<script>
export default {
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>

<style lang="scss" scoped>
.Content {
  .Content__Title {
    font-size: 10px;
  }
}

</style>

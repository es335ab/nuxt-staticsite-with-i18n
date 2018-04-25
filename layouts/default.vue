<template lang="pug">
  div.container
    global-header
    nuxt
</template>

<script>
import GlobalHeader from '~/layouts/parts/GlobalHeader.vue'

export default {
  data() {
    return {
      // locale: this.$store.state.locale, // これだと別言語のページに遷移後に言語を追従できず。。
    }
  },
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss">
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0;
}
</style>

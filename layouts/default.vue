<template lang="pug">
  div
    global-header
</template>

<script>
import GlobalHeader from '~/layouts/parts/GlobalHeader.vue'

export default {
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

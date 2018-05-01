<template lang="pug">
  div
    div {{ locale }}
    header.Header
      h1.Header__Title Nuxt i18n
      nav.Header__Menu
        nuxt-link.Header__Link(:to="$i18n.path('')" exact) {{ $t('links.home') }}
        nuxt-link.Header__Link(:to="$i18n.path('about')" exact) {{ $t('links.about') }}
        nuxt-link.Header__Link(:to="`/fr`" exact) {{ $t('links.french') }}
        nuxt-link.Header__Link(:to="`/ja`" exact) {{ $t('links.japanese') }}
        nuxt-link.Header__Link(:to="`/`" exact) {{ $t('links.english') }}
</template>

<script>
export default {
  data() {
    return {
      locale: this.$store.state.locale,
    }
  },
}
</script>

<style lang="scss" scoped>
.Header {
  color: #fff;
  height: 80px;
  line-height: 80px;
  background-color: #2e2f30;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
</style>

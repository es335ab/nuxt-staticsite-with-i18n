<template lang="pug">
  header.global-header
    h1.title Nuxt i18n
    div {{ locale }}
    nav.menu
      nuxt-link.mod-btn.is-primary(:to="$i18n.path('')" exact) {{ $t('links.home') }}
      nuxt-link(:to="$i18n.path('about')" exact) {{ $t('links.about') }}
      nuxt-link(:to="`/fr`" exact) {{ $t('links.french') }}
      nuxt-link(:to="`/ja`" exact) {{ $t('links.japanese') }}
      nuxt-link(:to="`/`" exact) {{ $t('links.english') }}
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
</style>

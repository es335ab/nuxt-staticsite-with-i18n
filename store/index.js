import usersData from '~/data/users.json'

export const state = () => ({
  locales: ['en', 'fr', 'ja'],
  locale: 'en',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

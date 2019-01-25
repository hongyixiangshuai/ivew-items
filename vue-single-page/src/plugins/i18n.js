import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhIvew from 'iview/src/locale/lang/zh-CN'
import enIvew from 'iview/src/locale/lang/en-US'
Vue.use(VueI18n)

Vue.locale = () => {}
function loadLocaleMessages () {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  Object.assign( messages['en'], enIvew);
  Object.assign( messages['zh'], zhIvew);
  return messages
}

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: loadLocaleMessages()
})

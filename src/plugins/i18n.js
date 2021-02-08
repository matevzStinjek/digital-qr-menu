import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { en, si } from '@/localization/translations'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'si',
    fallbackLocale: 'en',
    messages: {
        en,
        si,
    },
})


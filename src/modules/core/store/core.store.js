import constants from './constants'
import i18n from '@/plugins/i18n'

export default {
    state: {
        fontSize: false,
        language: '',
    },
    getters: {
        tabs () {
            return constants.tabs
        },
        fontSize (state) {
            return state.fontSize
        },
        // temp, will get from server
        languages (state) {
            return [
                { flag: '🇸🇮', tag: 'si' },
                { flag: '🇬🇧', tag: 'en' },
            ].map(language => ({ ...language, isActive: state.language === language.tag }))
        },
    },
    mutations: {
        SET_STATE_PROPERTY (state, { key, value }) {
            state[key] = value
        },
    },
    actions: {
        initialise ({ dispatch }) {
            dispatch('syncSettings')
            dispatch('menu/initialise', null, { root: true })
        },
        syncSettings ({ dispatch }) {
            const language = getStorageOrDefault('language', 'si')
            dispatch('setLanguage', language)

            const fontSize = getStorageOrDefault('fontSize', 'small')
            dispatch('setFontSize', fontSize)
        },
        setLanguage ({ commit }, language) {
            i18n.locale = language
            setStorage('language', language)
            commit('SET_STATE_PROPERTY', { key: 'language', value: language })
        },
        setFontSize ({ commit }, fontSize) {
            setStorage('fontSize', fontSize)
            commit('SET_STATE_PROPERTY', { key: 'fontSize', value: fontSize })
        },
    },
}

function getStorageOrDefault (key, defaultValue) {
    const storageValue = localStorage.getItem(key)
    return storageValue || defaultValue
}

function setStorage (key, value) {
    localStorage.setItem(key, value)
}

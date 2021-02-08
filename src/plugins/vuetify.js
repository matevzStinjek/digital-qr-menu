import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const options = {
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#ff8c29',
                secondary: '#242a37',
                accent: '#ff2d55',
                error: '#ff5252',
                info: '#0070c9',
                success: '#4caf50',
                warning: '#ffc107',
            },
        },
    },
}

export default new Vuetify(options)

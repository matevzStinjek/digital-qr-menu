import App from 'core/components/App.vue'
import vuetify from '@/plugins/vuetify.js'
import i18n from '@/plugins/i18n.js'

export class CoreModule {

    get name () {
        return 'core'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install (Vue) {
        this.vm = new Vue({
            router: this.router,
            store: this.store,
            vuetify,
            i18n,
            render: h => h(App),
        })
    }

    mount () {
        this.vm.$mount('#app')
    }
}

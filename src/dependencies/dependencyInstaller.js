import VueCompositionApi from '@vue/composition-api'
import smoothscroll from 'smoothscroll-polyfill'
import helpers from './helpers/index'

export class DependencyInstaller {

    get name () {
        return 'dependency-installer'
    }

    install (Vue) {
        Vue.use(VueCompositionApi)
        smoothscroll.polyfill() // smooth scroll for safari
        helpers.install(Vue) // directives and filters
    }
}

import Vue from 'vue'
import { DependencyInstaller } from '@/dependencies'
import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { MenuModule } from '@/modules/menu'
import { WishlistModule } from '@/modules/wishlist'
import { FeedbackModule } from '@/modules/feedback'
import { InfoModule } from '@/modules/info'

function bootstrap () {
    Vue.config.productionTip = false

    const dependencyInstaller = new DependencyInstaller()
    dependencyInstaller.install(Vue)

    const routerModule = new RouterModule()
    routerModule.install(Vue)

    const storeModule = new StoreModule()
    storeModule.install(Vue)

    const coreModule = new CoreModule(routerModule.router, storeModule.store)
    coreModule.install(Vue)

    const menuModule = new MenuModule(routerModule.router, storeModule.store)
    menuModule.install(Vue)

    const wishlistModule = new WishlistModule(routerModule.router, storeModule.store)
    wishlistModule.install(Vue)

    const feedbackModule = new FeedbackModule(routerModule.router, storeModule.store)
    feedbackModule.install(Vue)

    const infoModule = new InfoModule(routerModule.router, storeModule.store)
    infoModule.install(Vue)

    coreModule.mount()
}

bootstrap()

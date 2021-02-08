import menuRoutes from 'menu/routes'
import menuStore from 'menu/store'

export class MenuModule {

    get name () {
        return 'menu'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(menuRoutes)
        this.store.registerModule(this.name, menuStore)
    }
}

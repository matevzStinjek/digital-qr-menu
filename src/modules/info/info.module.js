import infoRoutes from 'info/routes'
import infoStore from 'info/store'

export class InfoModule {

    get name () {
        return 'info'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(infoRoutes)
        this.store.registerModule(this.name, infoStore)
    }
}

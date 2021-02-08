import wishlistRoutes from 'wishlist/routes'
import wishlistStore from 'wishlist/store'

export class WishlistModule {

    get name () {
        return 'wishlist'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(wishlistRoutes)
        this.store.registerModule(this.name, wishlistStore)
    }
}

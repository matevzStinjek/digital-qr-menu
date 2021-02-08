import feedbackRoutes from 'feedback/routes'
import feedbackStore from 'feedback/store'

export class FeedbackModule {

    get name () {
        return 'feedback'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(feedbackRoutes)
        this.store.registerModule(this.name, feedbackStore)
    }
}

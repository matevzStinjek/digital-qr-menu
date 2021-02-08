import { contain } from 'shared/util/util.js'
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        Icon,
    },
    props: {
        isSaved: { type: Boolean, default: false },
    },
    data () {
        return {
            translateX: 0,
            isSliding: false,
        }
    },
    computed: {
        transformStyle () {
            const x = this.translateX
            return { transform: `translateX(${x}px)` }
        },
        isToggleThresholdReached () {
            return this.translateX < this.toggleThreshold
        },
    },
    beforeCreate () {
        this.dragThreshold   = -64 // how far can you drag
        this.toggleThreshold = -48 // how far is enough to toggle saved
    },
    created () {
        this.dragCallbacks = {
            onDrag: this.onSlide,
            onRelease: this.onRelease,
        }
    },
    methods: {
        onSlide (delta) {
            this.translateX = contain(this.dragThreshold, delta.x, 0)
            this.isSliding = true
        },
        onRelease () {
            if (this.isToggleThresholdReached) {
                this.$emit('save', this.id)
            }
            this.translateX = 0
            this.isSliding = false
        },
    },
}

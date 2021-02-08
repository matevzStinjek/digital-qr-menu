const HAS_WINDOWS = typeof window !== 'undefined'
const HAS_NAVIGATOR = typeof navigator !== 'undefined'
const IS_TOUCH = HAS_WINDOWS && ('ontouchstart' in window || HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0)

function bind (el, { value }) {
    const { onDrag, onRelease } = value

    if (IS_TOUCH) {
        el.addEventListener('touchstart', onInteractionStart)
        el.addEventListener('touchend', onInteractionEnd)
    } else {
        el.addEventListener('mousedown', onInteractionStart)
        el.addEventListener('mouseup', onInteractionEnd)
    }

    let startingCoordinates
    let initialDirection

    function onInteractionStart (e) {
        startingCoordinates = getCoordinates(e)

        if (IS_TOUCH) {
            el.addEventListener('touchmove', onInteraction)
        } else {
            el.addEventListener('mousemove', onInteraction)
        }
    }
    function onInteractionEnd () {
        onRelease()

        if (IS_TOUCH) {
            el.removeEventListener('touchmove', onInteraction)
        } else {
            el.removeEventListener('mousemove', onInteraction)
        }

        initialDirection = null
    }
    function onInteraction (e) {
        const currentCoordinates = getCoordinates(e)
        const delta = {
            x: currentCoordinates.x - startingCoordinates.x,
            y: currentCoordinates.y - startingCoordinates.y,
        }
        setInitialDirection(delta)

        if (initialDirection === 'x') {
            onDrag(delta)
            e.preventDefault()
        }
    }
    function setInitialDirection (delta) {
        if (!initialDirection) {
            const isSideways = Math.abs(delta.x) > Math.abs(delta.y)
            initialDirection = isSideways ? 'x' : 'y'
        }
    }
    function getCoordinates (e) {
        const coordinates = {
            x: e.touches?.[0].clientX || e.clientX,
            y: e.touches?.[0].clientY || e.clientY,
        }
        return coordinates
    }
}

export default {
    bind,
    // unbind, // TODO: add unbind callback, remove event listeners
}

<template>
    <div>
        <landing v-if="landingData" :image="landingData.image" :name="landingData.name" :position="landingData.position" @click="onMenuClick" />
        <settings-bar />
        <restaurant-description :description="landingData.description" />
        <menu-element v-bind="standardMenu" ref="mainMenu" has-navbar has-filter @mounted="onMainMenuMounted" />
        <menu-element v-bind="drinkMenu" ref="drinkMenu" has-navbar is-last @mounted="onDrinkMenuMounted" />
    </div>
</template>

<script>
import { throttle } from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import Landing from 'menu/components/Landing.vue'
import SettingsBar from 'menu/components/SettingsBar.vue'
import RestaurantDescription from 'menu/components/RestaurantDescription.vue'
import Menu from 'menu/components/menu/Menu.vue'

export default {
    components: {
        Landing,
        SettingsBar,
        RestaurantDescription,
        menuElement: Menu,
    },
    computed: {
        ...mapGetters('menu', [
            'landingData',
            'standardMenu',
            'drinkMenu',
        ]),
    },
    mounted () {
        this.mainMenuEl = this.$refs.mainMenu
        this.drinkMenuEl = this.$refs.drinkMenu

        this.setNavbarItems()
        this.registerScrollListener()
    },
    destroyed () {
        this.unregisterScrollListener()
    },
    methods: {
        ...mapActions('menu', [
            'onScroll',
            'setMainMenuNavbarItems',
            'setDrinkMenuNavbarItems',
        ]),
        onMenuClick (menu) {
            const el = {
                'lunch': null,
                'a-la-carte': this.mainMenuEl.$el,
                'drinks': this.drinkMenuEl.$el,
            }[menu]

            el.scrollIntoView({ behavior: 'smooth' })
        },
        onMainMenuMounted (categories) {
            this.mainMenuCategoryAnchors = categories.map(mapAnchor)
        },
        onDrinkMenuMounted (categories) {
            this.drinkMenuCategoryAnchors = categories.map(mapAnchor)
        },
        setNavbarItems () {
            const drinkMenuAnchor = mapAnchor({ ...this.drinkMenuEl, icon: 'drinks' }, null, null, 0)
            const mainMenuCategoryAnchors = [...this.mainMenuCategoryAnchors, drinkMenuAnchor]
            this.setMainMenuNavbarItems(mainMenuCategoryAnchors)

            const mainMenuAnchor = mapAnchor({ ...this.mainMenuEl, icon: 'food' }, null, null, 0)
            const drinkMenuCategoryAnchors = [...this.drinkMenuCategoryAnchors, mainMenuAnchor]
            this.setDrinkMenuNavbarItems(drinkMenuCategoryAnchors)
        },
        registerScrollListener () {
            window.addEventListener('scroll', this.onViewScrollThrottle)
        },
        unregisterScrollListener () {
            window.removeEventListener('scroll', this.onViewScrollThrottle)
        },
        onViewScrollThrottle: throttle(function (e) {
            return this.onScroll(e)
        }, 50),
    },
}

function mapAnchor (anchor, i, c, offset) {
    const navbarHeight = 48
    return { id: anchor.icon, icon: anchor.icon, offset: anchor.$el.offsetTop - (offset ?? navbarHeight) }
}
</script>

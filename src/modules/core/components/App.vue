<template>
    <v-app id="app">
        <tabbed-view>
            <router-view />
        </tabbed-view>
    </v-app>
</template>

<script>
import TabbedView from './TabbedView.vue'

export default {
    components: {
        TabbedView,
    },
    created () {
        this.$store.dispatch('initialise')
    },
}
</script>

<style lang="scss">
@import 'core/styles/tailwind';

html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
@import 'shared/styles/common';

#app {
    @include regular-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100vw;
    min-height: 100vh;
    background-color: $fog;
}
</style>

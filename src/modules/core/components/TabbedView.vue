<template>
    <div class="tabbed-view__container">
        <div class="tabbed-view">
            <slot />
        </div>

        <div class="tabbed-view__tabs">
            <div v-for="tab in mappedTabs" :key="tab.id" class="tabbed-view__tab" :class="{ 'tabbed-view__tab--active': tab.isActive }" @click="onTabClick(tab)">
                <icon :name="tab.id" />
                <div>{{ $t(`common.${tab.id}`) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        Icon,
    },
    computed: {
        ...mapGetters([
            'tabs',
        ]),
        mappedTabs () {
            return this.tabs.map(tab => ({ ...tab, isActive: tab.route === this.$route.path }))
        },
    },
    methods: {
        onTabClick (tab) {
            if (this.$route.name === tab.id) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                this.$router.push(tab.route)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/mixins';

.tabbed-view {
    padding-bottom: 46px;

    &__container {
        width: 100%;
    }

    &__tabs {
        @include elevate;
        position: fixed;
        width: 100%;
        background-color: $white;
        bottom: 0;
        display: flex;
        padding: 8px 0 2px;
        z-index: 2;
    }

    &__tab {
        flex: 1 1 0;
        font-size: 12px;
        text-align: center;
        color: $ash;

        &--active {
            color: $orange;
        }
    }
}
</style>

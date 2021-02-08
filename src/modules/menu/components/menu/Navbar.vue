<template>
    <div class="navbar">
        <div class="navbar__categories">
            <div v-for="item in mappedItems" :key="item.id" class="navbar__icon-hitbox" @click="onItemClick(item)">
                <icon class="navbar__category-icon" :name="item.icon" :has-color="item.isActive" />
            </div>
        </div>
        <div v-if="hasFilter" class="navbar__filter" :class="{ 'navbar__filter--active': isFilterActive }">
            <div class="navbar__icon-hitbox" @click="onFilterClick">
                <icon class="navbar__filter-icon" name="filter" />
            </div>
        </div>
    </div>
</template>

<script>
import Icon from 'shared/components/stateless/Icon.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Icon,
    },
    props: {
        items: { type: Array, required: true }, // [{ id, icon, offset }]
        hasFilter: { type: Boolean, default: false },
    },
    computed: {
        ...mapGetters('menu', [
            'categortyInViewId',
            'isFilterActive',
        ]),
        mappedItems () {
            return this.items.map(item => ({
                ...item,
                isActive: item.id === this.categortyInViewId,
            }))
        },
    },
    methods: {
        onItemClick (item) {
            window.scroll({ top: item.offset, behavior: 'smooth' })
        },
        onFilterClick () {
            this.$emit('filter-click')
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/mixins';

.navbar {
    position: sticky;
    top: 0;
    height: 48px;
    padding: 0 12px;
    background-color: $white;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    align-items: center;
    z-index: 2;

    &__icon-hitbox {
        @include center-content;
        height: 40px;
        width: 40px;
    }
    &__categories {
        flex: 1 1 0;
        margin: 0 -8px;
        display: flex;
        align-items: center;
        color: black;
    }
    &__category-icon {
        height: 24px;
        width: 24px;
        color: $ash;
        margin: 0 8px;
    }
    &__filter {
        width: 32px;
        height: 32px;
        color: $ash;
        display: flex;
        align-items: center;
    }
    &__filter--active {
        color: $magenta;
        border-bottom: 2px solid $magenta;
    }
    &__filter-icon {
        margin: auto;
    }
}
</style>

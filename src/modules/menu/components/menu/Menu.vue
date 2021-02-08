<template>
    <div class="menu">
        <div class="menu__info">
            <div class="menu__title">{{ name }}</div>
            <div v-if="description" class="menu__description">{{ description }}</div>
        </div>

        <navbar
            v-if="hasNavbar"
            class="menu__navbar"
            :items="navbarItems"
            :has-filter="hasFilter"
            @filter-click="onFilterClick"
        />

        <parent-category ref="parentCategory" v-for="parentCategory in mappedParentCategories" :key="parentCategory.id" v-bind="parentCategory" />
    </div>
</template>

<script>
import { pick } from 'lodash'
import { mapActions } from 'vuex'
import Navbar from 'menu/components/menu/Navbar.vue'
import ParentCategory from './ParentCategory.vue'

export default {
    components: {
        Navbar,
        ParentCategory,
    },
    props: {
        name: { type: String, required: true },
        description: { type: String, default: null },
        navbarItems: { type: Array, required: true },
        content: { type: Array, required: true },
        isLast: { type: Boolean, default: false },
        hasNavbar: { type: Boolean, default: false },
        hasFilter: { type: Boolean, default: false },
    },
    computed: {
        mappedParentCategories () {
            const attributes = ['id', 'icon', 'categories', 'extras']
            const indexOfLast = this.content.length - 1

            return this.content.map((category, index) => ({
                ...pick(category, attributes),
                isLast: this.isLast && indexOfLast === index,
            }))
        },
    },
    mounted () {
        const parentCategories = this.$refs.parentCategory
        this.$emit('mounted', parentCategories)
    },
    methods: {
        ...mapActions('menu', [
            'openFilter',
        ]),
        onFilterClick () {
            this.openFilter()
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/typography';
@import 'shared/styles/colors';

.menu {
    margin-top: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0px -12px 8px 4px rgba(0, 0, 0, 0.08);

    &__navbar {
        margin-bottom: 16px;
    }
    &__info {
        padding: 12px;
        color: $orange;
    }
    &__title {
        @include medium-font;
        font-size: 32px;
    }
    &__description {
        @include medium-font;
        font-size: 14px;
        color: $black;
    }
}
</style>

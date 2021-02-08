<template>
    <div class="parent-category" :class="{ 'parent-category--is-last': isLast }">
        <category v-for="category in mappedCategories" :key="`${category.id}-${category.name}`" v-bind="category" />

        <template v-if="hasExtras">
            <div class="parent-category__extras">{{ $t('common.extras') }}</div>
            <dish v-for="dish in extras" :key="dish.id" v-bind="dish" @save="onDishSave" />
        </template>
    </div>
</template>

<script>
import { pick } from 'lodash'
import Dish from './Dish.vue'
import Category from './Category.vue'

export default {
    components: {
        Dish,
        Category,
    },
    props: {
        id: { type: Number, required: true },
        icon: { type: String, required: true },
        categories: { type: Array, required: true },
        extras: { type: Array, default: () => [] },
        isLast: { type: Boolean, default: false },
    },
    computed: {
        mappedCategories () {
            const attributes = ['id', 'name', 'description', 'items', 'icon']
            return this.categories.map(category => pick(category, attributes))
        },
        hasExtras () {
            return Boolean(this.extras?.length)
        },
    },
    methods: {
        onDishSave (id) {
            console.log(id)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/typography';

.parent-category {
    &__extras {
        @include medium-font;
        padding: 0 12px;
        margin: 16px 0 8px;
        font-size: 18px;
        text-transform: uppercase;
        text-align: center;
    }

    &--is-last {
        min-height: calc(100vh - 48px - 46px);
    }
}
</style>

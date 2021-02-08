<template>
    <div class="wishlist">
        <div class="wishlist__title">{{ $t('common.wishlist') }}</div>

        <div class="wishlist__group">
            <wishlist-dish v-for="dish in mockDishes" v-bind="dish" :key="dish.id" />
        </div>
    </div>
</template>

<script>
import { pick } from 'lodash'
import { mapGetters } from 'vuex'
import WishlistDish from './WishlistDish.vue'

export default {
    name: 'WishlistView',
    components: {
        WishlistDish,
    },
    computed: {
        ...mapGetters('menu', [
            'standardMenu',
        ]),
        mockDishes () {
            let dishes = [
                this.standardMenu.content[0].categories[0].items[0],
                this.standardMenu.content[1].categories[0].items[2],
                this.standardMenu.content[3].categories[0].items[2],
            ]
            dishes = dishes.map(dish => pick(dish, ['name', 'price', 'variations']))
            dishes = dishes.map((dish, index) => ({ ...dish, id: index, isFirst: index === 0, isLast: index === dishes.length - 1 }))
            return dishes
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/typography';
@import 'shared/styles/colors';

.wishlist {
    &__title {
        @include medium-font;
        color: $orange;
        padding: 24px 12px 0;
        font-size: 32px;
    }

    &__group {
        margin: 12px;
        background-color: $white;
        border-radius: 16px;
    }
}
</style>

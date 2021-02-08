<template>
    <div v-drag="dragCallbacks" class="wishlist-dish__container" :class="{ first: isFirst, last: isLast } | prefix('wishlist-dish__container--')">
        <div class="wishlist-dish" :class="{ animate: !isSliding, first: isFirst, last: isLast } | prefix('wishlist-dish--')" :style="transformStyle">
            <div class="wishlist-dish__name">{{ name }}</div>
            <dish-price class="wishlist-dish__price" :price="price" :variations="variations" size="small" />
        </div>
        <div class="wishlist-dish__save">
            <icon v-if="isToggleThresholdReached && !isSaved" class="wishlist-dish__save-icon" name="heart-full" />
            <icon v-else class="wishlist-dish__save-icon" name="heart" />
        </div>
    </div>
</template>

<script>
import draggable from 'shared/mixins/draggable'
import DishPrice from 'shared/components/domain/DishPrice.vue'

export default {
    components: {
        DishPrice,
    },
    mixins: [draggable],
    props: {
        id: { type: [String, Number], required: true },
        name: { type: String, required: true },
        price: { type: String, default: null },
        variations: { type: Array, default: null },
        isFirst: { type: Boolean, default: false },
        isLast: { type: Boolean, default: false },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.wishlist-dish {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    background-color: $white;
    border: 1px solid $cement;
    border-bottom: none;
    height: 64px;
    z-index: 1;

    &__container {
        display: flex;
        align-items: center;
        position: relative;
        background-color: $magenta;
    }
    &__name {
        flex: 1 1 0;
    }
    &__price {
        font-size: 12px;
    }
    &__save {
        @include center;
        @include center-content;
        left: auto;
        height: 48px;
        width: 48px;
    }
    &__save-icon {
        color: $white;
        height: 24px;
        width: 24px;
    }

    &--animate {
        transition: transform $default-animation-time ease-out;
    }
    &--first {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    &--last {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-bottom: 1px solid $cement;
    }
    &__container--first {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    &__container--last {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}
</style>

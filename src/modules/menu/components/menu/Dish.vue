<template>
    <div v-drag="dragCallbacks" class="dish__container">
        <div class="dish" :class="{ animate: !isSliding } | prefix('dish--')" :style="transformStyle">
            <div class="dish__info">
                <div class="dish__name-container">
                    <icon v-if="isSponsored" class="dish__sponsor" :name="icon" />
                    <div class="dish__name">{{ name }}</div>
                </div>

                <div v-if="description" class="dish__description">{{ description }}</div>
                <div v-if="ingredients" class="dish__ingredients">{{ ingredientsString }}</div>
            </div>
            <dish-price class="dish__price" :price="price" :variations="variations" />
        </div>
        <div class="dish__save">
            <icon v-if="isToggleThresholdReached && !isSaved" class="dish__save-icon" name="heart-full" />
            <icon v-else class="dish__save-icon" name="heart" />
        </div>
    </div>
</template>

<script>
import draggable from 'shared/mixins/draggable'
import DishPrice from 'shared/components/domain/DishPrice.vue'
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        DishPrice,
        Icon,
    },
    mixins: [draggable],
    props: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: String, default: null },
        variations: { type: Array, default: null },
        description: { type: String, default: null },
        ingredients: { type: Array, default: null },
        isSponsored: { type: Boolean, default: false },
        icon: { type: String, default: null },
        traits: { type: Array, default: null },
    },
    computed: {
        ingredientsString () {
            return this.ingredients.join(', ')
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.dish {
    display: flex;
    min-height: 48px;
    padding: 4px 12px;
    font-size: 12px;
    background-color: $fog;
    position: relative;
    z-index: 1;

    &__container {
        position: relative;
        margin-bottom: 4px;
        background-color: $magenta;
    }
    &__info {
        flex: 1 1 0;
        padding-right: 16px;
    }
    &__name-container {
        display: flex;
        align-items: center;
        padding: 4px 0;
    }
    &__name {
        @include medium-font;
        font-size: 16px;
    }
    &__sponsor {
        height: 32px;
        margin-right: 4px;
    }
    &__ingredients {
        @include medium-font;
        font-style: italic;
    }
    &__price {
        padding: 4px 0;
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
}
</style>

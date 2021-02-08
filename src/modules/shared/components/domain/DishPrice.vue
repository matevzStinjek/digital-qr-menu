<template>
    <div class="dish-price__container">
        <div v-if="price" class="dish-price">{{ price }} &euro;</div>
        <div v-else class="dish-price__variations" :class="`dish-price__variations--${size}`">
            <template v-for="{ variation, price } in variations">
                <div class="dish-price__variation-name" :key="`${variation}-name`">{{ variation }}</div>
                <div class="dish-price__variation-price" :key="`${variation}-price`">{{ price }} &euro;</div>
            </template>
        </div>
    </div>
</template>

<script>
const sizeValidator = size => ['small', 'medium'].includes(size)

export default {
    props: {
        price: { type: String, default: null },
        variations: { type: Array, default: null },
        size: { type: String, default: 'medium', validator: sizeValidator },
    },
}
</script>

<style lang="scss" scoped>

.dish-price {
    &__variations {
        display: grid;
        grid-template-columns: auto auto;
    }
    &__variation-name {
        text-align: right;
    }
    &__variation-price {
        text-align: right;
    }

    &__variations--small {
        column-gap: 4px;
    }
    &__variations--medium {
        grid-gap: 4px;
    }
}
</style>

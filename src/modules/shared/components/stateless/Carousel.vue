<template>
    <v-carousel hide-delimiter-background :show-arrows="false" height="100%">
        <v-carousel-item v-for="item in mappedItems" :key="item.id">
            <v-sheet height="100%">
                <img class="carousel__image" :src="item.image">
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>

const itemsValidator = items => items.length && items.every(item => 'image' in item)

export default {
    props: {
        items: { type: Array, required: true, validator: itemsValidator },
    },
    computed: {
        mappedItems () {
            return this.items.map((item, index) => ({ ...item, id: index }))
        },
    },
}
</script>

<style lang="scss" scoped>

.carousel__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>

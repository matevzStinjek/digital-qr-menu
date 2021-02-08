<template>
    <div class="category">
        <div v-if="name" class="category__info">
            <div class="category__header">
                <div class="category__name">{{ name }}</div>
                <icon class="category__icon" has-color :name="icon" />
            </div>
            <div v-if="description" class="category__description">{{ description }}</div>
        </div>

        <dish v-for="dish in items" :key="dish.id" v-bind="dish" @click.native="onDishClick" @save="onDishSave" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Dish from './Dish.vue'
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        Dish,
        Icon,
    },
    props: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        icon: { type: String, required: true },
        items: { type: Array, required: true },
        description: { type: String, default: null },
    },
    methods: {
        ...mapActions('menu', [
            'initialiseDishDetailView',
        ]),
        onDishClick () {
            this.initialiseDishDetailView()
        },
        onDishSave (id) {
            console.log(id)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/typography';

.category {
    margin-top: 16px;
    padding-top: 16px;

    &__info {
        padding: 0 12px;
        margin-bottom: 16px;
    }
    &__header {
        display: flex;
    }
    &__name {
        @include medium-font;
        font-size: 32px;
        flex: 1 1 0;
    }
    &__description {
        font-style: italic;
    }
    &__icon {
        height: 32px;
        width: 32px;
        margin: 8px 0;
    }
}
</style>

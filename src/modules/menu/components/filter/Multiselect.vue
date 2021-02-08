<template>
    <v-list>
        <transition-group :name="animation" tag="div">
            <v-list-item v-for="item in items" :key="item.id" @click="onItemClick(item)">
                <div class="item">
                    <div class="item__label">{{ item.label }}</div>
                    <div class="item__check">
                        <icon v-if="item.isSelected" name="check" />
                    </div>
                </div>
            </v-list-item>
        </transition-group>
    </v-list>
</template>

<script>
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        Icon,
    },
    props: {
        items: { type: Array, required: true },
        hasAnimation: { type: Boolean, default: true },
    },
    computed: {
        animation () {
            return this.hasAnimation ? 'list-animation' : ''
        },
    },
    methods: {
        onItemClick (item) {
            this.$emit('item-click', item) // cont.
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.item {
    display: flex;
    width: 100%;

    &__check {
        width: 32px;
        color: $blue;
    }
    &__label {
        @include ellipsis;
        flex: 1 1 0;
    }
}

.list-animation-move {
  transition: transform $default-animation-time ease-out;
}
</style>

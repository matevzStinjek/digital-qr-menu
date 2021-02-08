<template>
    <panel class="member">
        <div class="member__header">
            <img class="member__image" :src="imageSrc">
            <div class="member__info">
                <div class="member__name">{{ name }}</div>
                <div class="member__role">{{ $t(`roles.${role}`) }}</div>
            </div>
        </div>

        <div class="member__description">{{ description }}</div>
    </panel>
</template>

<script>
import Panel from 'shared/components/furniture/Panel.vue'

export default {
    components: {
        Panel,
    },
    props: {
        name: { type: String, required: true },
        description: { type: String, required: true },
        role: { type: String, required: true },
        imageSrc: { type: String, required: true },
        isReversed: { type: Boolean, defaukt: false },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/mixins';
@import 'shared/styles/colors';

.member {
    margin: 16px 0;

    &__image {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        object-fit: cover;
    }
    &__header {
        display: flex;
        align-items: center;
    }
    &__info {
        margin-left: 8px;
    }
    &__name {
        flex: 1 1 0;
        @include medium-font;
    }
    &__role {
        color: $ash;
        line-height: 10px;
        font-size: 14px;
        margin-top: 3px;
    }
    &__description {
        font-size: 14px;
        margin-top: 8px;
    }

    &__name--reversed {
        order: -1;
    }
}
</style>

<template>
    <div class="landing">
        <img class="landing__image" :src="image">
        <div class="landing__image-overlay" />

        <div class="landing__container">
            <div class="landing__name">{{ name }}</div>
            <div class="landing__buttons">
                <!-- <button-element role="secondary" @click="onClick('lunch')">Malice in kosila</button-element> -->
                <button-element role="secondary" @click="onClick('a-la-carte')">A La Carte</button-element>
                <button-element role="secondary" @click="onClick('drinks')">Cenik pijač</button-element>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'

export default {
    components: {
        buttonElement: Button,
    },
    props: {
        image: { type: String, default: null },
        name: { type: String, default: null },
    },
    // TODO: unhardcode buttons, get from state
    methods: {
        onClick (menu) {
            this.$emit('click', menu)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/typography';

.landing {
    position: relative;
    height: 256px;
    display: flex;

    &__image {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &__image-overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: .35;
        z-index: 0;
    }
    &__container {
        position: relative;
        width: 100%;
        margin: 16px;
    }
    &__name {
        @include bold-font;
        font-size: 32px;
        color: $white;
        height: fit-content;
        width: fit-content;
        position: absolute;
        margin: auto;
        top: 64px;
        right: 0;
    }
    &__buttons {
        position: absolute;
        margin: auto;
        bottom: 0;
        right: 0;
        display: grid;
        grid-gap: 4px;
    }
}
</style>

<template>
    <div class="settings">
        <div class="settings__title">{{ $t('common.settings') }}</div>

        <div class="settings__font-size">
            <span class="settings__font-size--small">A</span>
            <v-switch class="settings__font-size-switch--override" color="gray" v-model="fontSizeValue" dense hide-details flat />
            <span class="settings__font-size--large">A</span>
        </div>

        <div class="settings__language">
            <div
                v-for="{ tag, flag, isActive } in languages"
                :key="tag"
                class="settings__language-icon"
                :class="{ 'settings__language-icon--active': isActive }"
                @click="onLanguageClick(tag)"
            >{{ flag }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'fontSize',
            'languages',
        ]),
        fontSizeValue: {
            get: function () {
                return this.fontSize === 'large'
            },
            set: function (isFontSizeLarge) {
                const fontSize = isFontSizeLarge ? 'large' : 'small'
                this.setFontSize(fontSize)
            },
        },
    },
    methods: {
        ...mapActions([
            'setLanguage',
            'setFontSize',
        ]),
        onLanguageClick (language) {
            this.setLanguage(language)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/mixins';

.settings {
    @include elevate;
    background-color: $white;
    height: 48px;
    margin-top: 12px;
    padding: 0 12px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    &__title {
        @include medium-font;
        width: fit-content;
    }
    &__font-size {
        display: flex;
        align-items: center;
        justify-self: center;
    }
    &__font-size--small {
        font-size: 16px;
        margin-right: 8px;
    }
    &__font-size--large {
        font-size: 20px;
    }
    &__font-size-switch--override {
        margin: 0;
        padding: 0;
    }
    &__language {
        font-size: 18px;
        display: flex;
        margin-left: auto;
    }
    &__language-icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        text-align: center;
        line-height: 34px; // +2px for emojis
    }
    &__language-icon--active {
        background-color: $gray;
    }
}
</style>

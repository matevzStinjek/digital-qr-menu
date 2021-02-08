<template>
    <div class="filter-header">
        <icon class="filter-header__close" name="cross" @click="$emit('close')" />
        <div class="filter-header__label">{{ title }}</div>
        <div v-if="isClearShown" class="filter-header__clear" @click="$emit('clear')">{{ $t('common.clear') }}</div>
    </div>
</template>

<script>
import Icon from 'shared/components/stateless/Icon.vue'

export default {
    components: {
        Icon,
    },
    props: {
        title: { type: String, required: true },
        isClearShown: { type: Boolean, default: false },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/typography';

.filter-header {
    padding: 0 12px;
    height: 48px;
    background-color: $white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    &__close {
        margin: auto 0;
    }
    &__label {
        @include medium-font;
        margin: auto;
    }
    &__clear {
        margin: auto;
        margin-right: 0;
        color: $blue;
    }
}
</style>

<template>
    <panel class="section">
        <div class="section__title">{{ $t('common.about-us') }}</div>
        <div class="section__description">{{ description }}</div>
    </panel>
</template>

<script>
import Panel from 'shared/components/furniture/Panel.vue'

export default {
    components: {
        Panel,
    },
    props: {
        description: { type: String, required: true },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.section {
    margin: 12px;

    &__title {
        @include medium-font;
        font-size: 20px;
        margin-bottom: 8px;
    }
    &__description {
        @include medium-font;
        white-space: break-spaces;
        font-size: 14px;
    }
}
</style>

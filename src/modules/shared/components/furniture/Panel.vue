<template>
    <div class="panel">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import 'shared/styles/mixins';
@import 'shared/styles/colors';

.panel {
    @include elevate;
    background-color: $white;
    border-radius: 16px;
    padding: 16px;
}
</style>

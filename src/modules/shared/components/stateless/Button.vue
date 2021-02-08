<template>
    <div class="button"
         :class="/* can't use interpolation because of the need to purge css */ {
             'button--cta': role === 'cta',
             'button--cta-secondary': role === 'cta-secondary',
             'button--primary': role === 'primary',
             'button--secondary': role === 'secondary',
             'button--tertiary': role === 'tertiary',
         }"
         @click="$emit('click')"
    >
        <slot />
    </div>
</template>

<script>
const roleValidator = role => ['cta', 'cta-secondary', 'primary', 'secondary', 'tertiary'].includes(role)

export default {
    props: {
        role: { type: String, default: 'primary', validator: roleValidator }, // cta | cta-secondary | primary | secondary | tertiary
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/typography';

.button {
    @include medium-font;
    height: 32px;
    width: 128px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;

    &--cta {
        border-radius: 16px;
        padding: 0 16px;
        background-color: $orange;
        color: $white;
    }
    &--cta-secondary {
        border-radius: 16px;
        padding: 0 16px;
        border: 1px solid $orange;
        color: $orange;

    }
    &--primary {
        border-radius: 4px;
        padding: 0 4px;
        background-color: $orange;
        color: $white;
    }
    &--secondary {
        border-radius: 4px;
        padding: 0 4px;
        border: 1px solid $orange;
        color: $orange;
    }
    &--tertiary {
        border: none;
        color: $orange;
        text-decoration: underline;
    }
}
</style>

<template>
    <div class="filter-option" @click="onOptionClick">
        <div class="filter-option__interface">
            <div class="filter-option__label">{{ label }}</div>
            <div class="filter-option__state-label">{{ stateLabel }}</div>
        </div>

        <filter-option-dialog ref="dialog" v-model="selectedOptions" :options="options" :label="label" @close="onDialogClose" :is-single-select="isSingleSelect" />
        <v-overlay :value="isOverlayShown" />
    </div>
</template>

<script>
import FilterOptionDialog from './FilterOptionDialog.vue'

export default {
    components: {
        FilterOptionDialog,
    },
    props: {
        value: { type: Array, default: () => [] },
        options: { type: Array, required: true },
        label: { type: String, required: true },
        stateLabel: { type: String, required: true },
        isSingleSelect: { type: Boolean, default: false },
    },
    data () {
        return {
            isOverlayShown: false,
        }
    },
    computed: {
        selectedOptions: {
            get: function () {
                return this.value
            },
            set: function (options) {
                this.emit(options)
            },
        },
    },
    mounted () {
        this.dialog = this.$refs.dialog
    },
    methods: {
        onOptionClick () {
            this.dialog.publicMethods.openDialog()
            this.isOverlayShown = true
        },
        onDialogClose () {
            this.isOverlayShown = false
        },
        emit (value) {
            this.$emit('input', value)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/common';

.filter-option {
    background-color: $white;
    height: 48px;
    padding: 0 12px;

    &__interface {
        display: flex;
        margin-bottom: 8px;
    }
    &__label {
        @include medium-font;
        flex: 1 1 0;
        line-height: 48px;
    }
    &__state-label {
        @include ellipsis;
        margin-left: 16px;
        color: $ash;
        line-height: 48px;
    }
}
</style>

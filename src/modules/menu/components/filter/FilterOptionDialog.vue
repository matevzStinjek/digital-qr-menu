<template>
    <v-dialog v-model="isOptionDialogOpen" fullscreen transition="dialog-bottom-transition">
        <div class="filter-option-dialog__wrapper">
            <div class="filter-option-dialog">
                <filter-header :title="label" :is-clear-shown="isClearShown" @close="onClose" @clear="onClear" />

                <div v-if="!isSingleSelect" class="filter-option-dialog__search-panel">
                    <div v-if="!isSingleSelect" class="filter-option-dialog__search">
                        <v-text-field v-model="searchQuery" :label="$t('common.search')" hide-details="auto" outlined dense clearable />
                    </div>
                </div>

                <div class="filter-option-dialog__options">
                    <multiselect :items="processedOptions" :has-animation="!isSingleSelect" @item-click="onItemClick" />
                </div>

                <div class="filter-option-dialog__button" @click="onConfirm">{{ $t('common.confirm') }}</div>
            </div>
        </div>
    </v-dialog>
</template>

<script>
import { xor } from 'lodash'
import model from 'menu/model/menu.model'
import Multiselect from './Multiselect.vue'
import FilterHeader from './FilterHeader.vue'

export default {
    components: {
        Multiselect,
        FilterHeader,
    },
    props: {
        value: { type: Array, default: () => [] },
        options: { type: Array, required: true },
        label: { type: String, required: true },
        isSingleSelect: { type: Boolean, default: false },
    },
    data () {
        return {
            isOptionDialogOpen: false,
            searchQuery: '',
            selectedIds: [],
        }
    },
    computed: {
        isClearShown () {
            return Boolean(this.selectedIds?.length)
        },
        processedOptions () {
            let options
            options = model.filterBySearchQuery(this.options, this.searchQuery)
            options = model.mapIsSelected(options, this.selectedIds)
            return options
        },
        publicMethods () {
            return {
                openDialog: this.openDialog,
            }
        },
    },
    watch: {
        isOptionDialogOpen (isOpen) {
            isOpen && this.syncSelectedIdsWithStore()
        },
    },
    methods: {
        onClose () {
            this.closeDialog()
        },
        onConfirm () {
            this.emit(this.selectedIds)
            this.closeDialog()
        },
        onClear () {
            const empty = []
            this.setSelectedIds(empty)
        },
        onItemClick (item) {
            this.searchQuery = ''
            const toggeledIds = this.isSingleSelect ? [item.id] : xor(this.selectedIds, [item.id])
            this.setSelectedIds(toggeledIds)
        },

        openDialog () {
            this.isOptionDialogOpen = true
        },
        closeDialog () {
            this.isOptionDialogOpen = false
            this.$emit('close')
        },
        syncSelectedIdsWithStore () {
            const clone = [...this.value]
            this.setSelectedIds(clone)
        },
        setSelectedIds (selectedIds) {
            this.selectedIds = selectedIds
        },
        emit (options) {
            this.$emit('input', options)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'shared/styles/colors';
@import 'shared/styles/typography';

.filter-option-dialog {
    position: relative;
    background-color: $white;
    margin-top: 48px;
    flex: 1 1 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    &__search-panel {
        border-bottom: 1px solid $cement;
    }
    &__search {
        margin: 12px
    }
    &__options {
        flex: 1 1 0;
        padding-bottom: 64px;
        overflow: auto;
    }
    &__button {
        @include medium-font;
        position: absolute;
        margin: auto;
        bottom: 8px;
        right: 8px;
        left: 8px;
        text-align: center;
        height: 48px;
        line-height: 48px;
        background-color: $black;
        color: $white;
    }
}
</style>

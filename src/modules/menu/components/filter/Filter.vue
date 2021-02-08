<template>
    <v-dialog v-model="isFilterOpen" fullscreen hide-overlay transition="scale-transition" origin="top right">
        <div class="filter">
            <filter-header :title="$t('common.filter')" :is-clear-shown="isFilterActive" @close="onClose" @clear="onGlobalClear" />

            <div class="filter__content">
                <filter-option v-model="selectedIngredients" :options="ingredients" :label="$t('common.ingredients')" :state-label="ingredientsStateLabel" />

                <filter-option v-model="selectedAllergens" :options="allergens" :label="$t('common.allergens')" :state-label="allergensStateLabel" />

                <filter-option v-model="selectedDiet" :options="diets" :label="$t('common.diet')" :state-label="dietStateLabel" is-single-select />
            </div>

            <div class="filter__button" @click="onClose">{{ $t('common.confirm') }}</div>
        </div>
    </v-dialog>
</template>

<script>
import FilterOption from './FilterOption.vue'
import FilterHeader from './FilterHeader.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        FilterOption,
        FilterHeader,
    },
    computed: {
        ...mapGetters('menu', [
            'isFilterActive',
            'ingredients',
            'allergens',
            'diets',
        ]),
        ...mapGetters('menu', {
            isFilterOpenValue: 'isFilterOpen',
            selectedIngredientsValue: 'selectedIngredients',
            selectedAllergensValue: 'selectedAllergens',
            selectedDietValue: 'selectedDiet',
        }),
        isFilterOpen: {
            set: function (isOpen) {
                isOpen ? this.openFilter() : this.closeFilter()
            },
            get: function () {
                return this.isFilterOpenValue
            },
        },

        // ingredients
        selectedIngredients: {
            set: function (ingredients) {
                this.setSelectedIngredients(ingredients)
            },
            get: function () {
                return this.selectedIngredientsValue
            },
        },
        ingredientsStateLabel () {
            return this.stringifySelectedOptions(this.selectedIngredients, this.ingredients)
        },
        // allergens
        selectedAllergens: {
            set: function (allergens) {
                this.setSelectedAllergens(allergens)
            },
            get: function () {
                return this.selectedAllergensValue
            },
        },
        allergensStateLabel () {
            return this.stringifySelectedOptions(this.selectedAllergens, this.allergens)
        },
        // diets
        selectedDiet: {
            set: function (diet) {
                this.setSelectedDiet(diet)
            },
            get: function () {
                return this.selectedDietValue
            },
        },
        dietStateLabel () {
            return this.stringifySelectedOptions(this.selectedDiet, this.diets)
        },
    },
    methods: {
        ...mapActions('menu', [
            'closeFilter',
            'clearFilter',
            'setSelectedIngredients',
            'setSelectedAllergens',
            'setSelectedDiet',
        ]),

        onClose () {
            this.closeFilter()
        },
        onConfirm () {
            this.closeFilter()
        },
        onGlobalClear () {
            this.clearFilter()
        },

        stringifySelectedOptions (selectedIds, options) {
            return selectedIds && options.filter(filterBySelected).map(mapLabel).join(', ') || ''

            function filterBySelected (option) {
                return selectedIds.includes(option.id)
            }
            function mapLabel (option) {
                return option.label
            }
        },
    },
}
</script>

<style lang="scss">
@import 'shared/styles/colors';

.filter {
    background-color: $fog;
    height: 100%;

    &__content {
        flex: 1 1 0;
        margin: 32px 0;
        background-color: $cement;

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1px;
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

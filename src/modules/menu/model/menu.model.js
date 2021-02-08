import { uniq } from 'lodash'

export default {
    // temp - fill wetch from server
    shakeIngredients (categories) {
        const ingredients = []
        shakeCategories(categories)
        return uniq(ingredients)

        function shakeCategories (categories) {
            categories.forEach(shakeCategory)
        }
        function shakeCategory (category) {
            if (category.items) {
                category.items.forEach(shakeItem)
            }
            if (category.categories) {
                shakeCategories(category.categories)
            }
        }
        function shakeItem (item) {
            if (item.ingredients) {
                ingredients.push(...item.ingredients)
            }
        }
    },
    formatForMultiselect (list) {
        return list.map((element, index) => ({
            id: index,
            label: element,
        }))
    },

    // TOOD: replace with a fizzy search (after i18n)
    filterBySearchQuery (options, searchQuery) {
        return searchQuery ? options.filter(filterOption) : options

        function filterOption (option) {
            const needle = normalise(searchQuery)
            const haysack = normalise(option.label)
            return haysack.includes(needle)
        }
        function normalise (str) {
            // temp support for SI
            str = replaceAll(str, 'č', 'c')
            str = replaceAll(str, 'š', 's')
            str = replaceAll(str, 'ž', 'z')
            return str
        }
        function replaceAll (str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace)
        }
    },
    mapIsSelected (options, selectedIds) {
        selectedIds = selectedIds || []
        return options.map(mapAttribute)

        function mapAttribute (option) {
            return {
                ...option,
                isSelected: selectedIds.includes(option.id),
            }
        }
    },
}

import service from 'menu/services/menu.service'
import model from 'menu/model/menu.model'
import constants from './constants'

const menu = {
    state: {
        landingData: null,
        menus: null,
        scrollPosition: null,
        mainMenuNavbarItems: [],
        drinkMenuNavbarItems: [],
        categortyInViewId: null,
    },
    getters: {
        landingData (state) {
            return state.landingData
        },
        intervalMenu (state) {
            return state.menus.find(menu => menu.type === 0)
        },
        standardMenu (state) {
            let menu
            menu = state.menus.find(menu => menu.type === 'standard')
            menu = appendNavbarItems(menu)
            return menu

            function appendNavbarItems (menu) {
                return { ...menu, navbarItems: state.mainMenuNavbarItems }
            }
        },
        drinkMenu (state) {
            let menu
            menu = state.menus.find(menu => menu.type === 'drink')
            menu = appendNavbarItems(menu)
            return menu

            function appendNavbarItems (menu) {
                return { ...menu, navbarItems: state.drinkMenuNavbarItems }
            }
        },
        categortyInViewId (state) {
            return state.categortyInViewId
        },
    },
    actions: {
        initialise ({ commit }) {
            service.fetchRestaurantData()
                .then(setFetchedData)

            function setFetchedData (data) {
                const landingData = { name: data.name, image: data.image, description: data.description }
                commit('SET_STATE_PROPERTY', { key: 'landingData', value: landingData })
                commit('SET_STATE_PROPERTY', { key: 'menus', value: data.menus })
            }
        },
        onScroll ({ state, commit }) {
            const scrollTop = window.scrollY
            const contextOffset = 16 + 1 // +1 to reach the next category
            const categoryInViewId = matchCategory(state.drinkMenuNavbarItems) || matchCategory(state.mainMenuNavbarItems)
            if (categoryInViewId !== state.categortyInViewId) {
                commit('SET_STATE_PROPERTY', { key: 'categortyInViewId', value: categoryInViewId })
            }

            function matchCategory (categories) {
                return categories.slice(0, -1).reverse().find(anchor => anchor.offset - contextOffset < scrollTop)?.id
            }
        },
        setMainMenuNavbarItems ({ commit }, navbarItems) {
            commit('SET_STATE_PROPERTY', { key: 'mainMenuNavbarItems', value: navbarItems })
        },
        setDrinkMenuNavbarItems ({ commit }, navbarItems) {
            commit('SET_STATE_PROPERTY', { key: 'drinkMenuNavbarItems', value: navbarItems })
        },
    },
}

const dish = {
    state: {
        isLoaded: false,
        dishDetails: {},
        isDishDetailOpen: false,
    },
    getters: {
        isLoaded (state) {
            return state.isLoaded
        },
        dish (state) {
            return state.dishDetails
        },
        isDishDetailOpen (state) {
            return state.isDishDetailOpen
        },
    },
    actions: {
        initialiseDishDetailView ({ dispatch, commit }) {
            dispatch('resetDishDetailView')
            commit('SET_STATE_PROPERTY', { key: 'isDishDetailOpen', value: true })

            service.fetchDishDetails()
                .then(data => commit('SET_STATE_PROPERTY', { key: 'dishDetails', value: data }))
                .then(() => commit('SET_STATE_PROPERTY', { key: 'isLoaded', value: true }))
        },
        closeDishDetailView ({ dispatch, commit }) {
            dispatch('resetDishDetailView')
            commit('SET_STATE_PROPERTY', { key: 'isDishDetailOpen', value: false })
        },
        resetDishDetailView ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'isLoaded', value: false })
            commit('SET_STATE_PROPERTY', { key: 'dishDetails', value: {} })
        },
    },
}

const filter = {
    state: {
        isFilterOpen: false,
        selectedIngredients: [],
        selectedAllergens: [],
        selectedDiet: [],
    },
    getters: {
        isFilterOpen (state) {
            return state.isFilterOpen
        },
        isFilterActive (state) {
            return Boolean(state.selectedIngredients?.length || state.selectedAllergens?.length || state.selectedDiet?.length)
        },
        ingredients (_, getters) {
            // temp - will fetch from server
            const content = getters.standardMenu.content
            const ingredients = model.shakeIngredients(content)
            return model.formatForMultiselect(ingredients)
        },
        selectedIngredients (state) {
            return state.selectedIngredients
        },
        allergens () {
            return model.formatForMultiselect(constants.allergens)
        },
        selectedAllergens (state) {
            return state.selectedAllergens
        },
        diets () {
            return model.formatForMultiselect(constants.diets)
        },
        selectedDiet (state) {
            return state.selectedDiet
        },
    },
    actions: {
        openFilter ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'isFilterOpen', value: true })
        },
        closeFilter ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'isFilterOpen', value: false })
        },
        clearFilter ({ dispatch }) {
            dispatch('resetIngredients')
            dispatch('resetAllergens')
            dispatch('resetDiet')
        },
        setSelectedIngredients ({ commit }, ingredients) {
            commit('SET_STATE_PROPERTY', { key: 'selectedIngredients', value: ingredients })
        },
        resetIngredients ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'selectedIngredients', value: [] })
        },
        setSelectedAllergens ({ commit }, selectedAllergens) {
            commit('SET_STATE_PROPERTY', { key: 'selectedAllergens', value: selectedAllergens })
        },
        resetAllergens ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'selectedAllergens', value: [] })
        },
        setSelectedDiet ({ commit }, diet) {
            commit('SET_STATE_PROPERTY', { key: 'selectedDiet', value: diet })
        },
        resetDiet ({ commit }) {
            commit('SET_STATE_PROPERTY', { key: 'selectedDiet', value: [] })
        },
    },
}

const shared = {
    mutations: {
        SET_STATE_PROPERTY (state, { key, value }) {
            state[key] = value
        },
    },
}

export default {
    namespaced: true,
    state: {
        ...menu.state,
        ...dish.state,
        ...filter.state,
    },
    getters: {
        ...menu.getters,
        ...dish.getters,
        ...filter.getters,
    },
    mutations: {
        ...shared.mutations,
    },
    actions: {
        ...menu.actions,
        ...dish.actions,
        ...filter.actions,
    },
}

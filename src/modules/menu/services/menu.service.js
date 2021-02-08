import sample from './sample'

const mockApi = {
    getRestaurantData () {
        return sample.restaurant
    },
    getDishDetails () {
        return sample.dish
    },
}

export default {
    fetchRestaurantData () {
        return new Promise(resolve => resolve(mockApi.getRestaurantData()))
    },
    fetchDishDetails () {
        return new Promise(resolve => resolve(mockApi.getDishDetails()))
    },
}

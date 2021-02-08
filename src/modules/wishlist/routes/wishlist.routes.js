const Wishlist = import(/* webpackChunkName: "wishlist" */ 'wishlist/views/WishlistView.vue')

export default [
    {
        path: '/wishlist',
        name: 'wishlist',
        component: () => Wishlist,
    },
]

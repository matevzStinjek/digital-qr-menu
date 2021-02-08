const Menu = () => import(/* webpackChunkName: "menu" */ 'menu/views/MenuView.vue')

export default [
    {
        path: '/',
        name: 'menu',
        component: Menu,
    },
]

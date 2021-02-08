const Info = () => import(/* webpackChunkName: "info" */ 'info/views/InfoView.vue')

export default [
    {
        path: '/info',
        name: 'info',
        component: Info,
    },
]

const Feedback = () => import(/* webpackChunkName: "feedback" */ 'feedback/views/FeedbackView.vue')

export default [
    {
        path: '/feedback',
        name: 'feedback',
        component: Feedback,
    },
]

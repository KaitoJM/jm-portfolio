export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        store.dispatch('global/setBackgroundProperties', {
            "background-image": "none",
        })
        next()
    })
 }
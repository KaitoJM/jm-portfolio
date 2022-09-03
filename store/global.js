export const state = () => ({
    background_properies: {
        "background-image": "none",
    }
});

export const getters = {
    backgroundProperties(state) {
        return state.background_properies;
    },
}

export const mutations = {
    setBackgroundProperties (state, value) {
        state.background_properies = value;
    },
}

export const actions = {
    setBackgroundProperties (context, value) {
        if (value['background-image'] != context.state.background_properies['background-image']) {
            context.commit('setBackgroundProperties', {...context.state.background_properies, opacity: 0})
    
            setTimeout(function() {
                if (value) {
                    value.opacity = 0.4
                }
                context.commit('setBackgroundProperties', value)
            }, 500)
        }
    },
}
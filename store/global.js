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
const category = {
    namespaced: true,
    state: () => ({
        categories: []
    }),
    mutations: {
        setCategories(state, data) {
            state.categories = data;
        }
    },
    getters: {
        getCategories: state => {
            return state.categories
        },
    }
}

export default category;
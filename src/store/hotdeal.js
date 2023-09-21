const hotDeal = {
    namespaced: true,
    state: () => ({
        hotDeals: []
    }),
    mutations: {
        setHotDeals(state, data) {
            state.hotDeals = data;
        }
    },
    getters: {
        getHotDeals: state => {
            return state.hotDeals
        },
    }
}

export default hotDeal;
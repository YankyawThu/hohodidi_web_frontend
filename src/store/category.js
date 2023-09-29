import CategoryService from '../services/category'

const category = {
    namespaced: true,
    state: () => ({
        categories: []
    }),
    actions: {
        fetch({ commit }) {
            return CategoryService.fetch().then(
                data => {
                    commit('setCategories', data)
                    return Promise.resolve(data)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        setCategories(state, data) {
            state.categories = data
        }
    },
    getters: {
        getCategories: state => {
            return state.categories
        },
    }
}

export default category
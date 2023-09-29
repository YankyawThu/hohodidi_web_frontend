import UserService from '../services/user'

const user = {
    namespaced: true,
    state: () => ({
        user: {}
    }),
    actions: {
        fetch({ commit }, data) {
            return UserService.fetch(data).then(
                data => {
                    commit('setUser', data)
                    return Promise.resolve(data)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        }
    },
    getters: {
        getUser: state => {
            return state.user
        },
    }
}

export default user
import AuthService from '../services/auth'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user: user } : { loggedIn: false, user: null }

const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, data) {
            return AuthService.login(data).then(
                response => {
                    commit('setLogin', { loggedIn: true, user: response })
                    return Promise.resolve(response)
                },
                error => {
                    commit('setLogin', { loggedIn: false, user: null })
                    return Promise.reject(error)
                }
            )
        },
        logout({ commit }) {
            AuthService.logout()
            commit('setLogout')
        }
    },
    mutations: {
        setLogin(state, data) {
            state.loggedIn = data.loggedIn
            state.user = data.user
        },
        setLogout(state) {
            state.loggedIn = false
            state.user = null
        }
    }
}

export default auth
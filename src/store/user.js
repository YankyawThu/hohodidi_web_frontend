import router from '../router'
import UserService from '../services/user'

const user = {
    namespaced: true,
    state: () => ({
        user: {},
        cartCount: 0,
    }),
    actions: {
        fetch({ commit }) {
            return UserService.fetch().then(
                response => {
                    commit('setUser', response)
                    return Promise.resolve(response)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },
        fetchCartList({ commit, state }) {
            if(state.user) {
                return UserService.fetchCartList().then(
                    response => {
                        let count = 0
                        response.map(data => {
                            count += data.addToCartList.length
                        })
                        commit('setCartCount', count)
                        return Promise.resolve(response)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            }
            else router.push({name: 'login'})
        },
        addToCart({ commit, state }, data) {
            if(Object.keys(state.user).length > 0) {
                return UserService.addToCart(data).then(
                    response => {
                        return Promise.resolve(response)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            }
            else router.push({name: 'login'})
        },
        rmItemFromCart({ commit, state }, data) {
            if(state.user) {
                return UserService.rmItemFromCart(data).then(
                    response => {
                        return Promise.resolve(response)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            }
            else router.push({name: 'login'})
        },
        checkout({ commit, state }, data) {
            if(state.user) {
                return UserService.checkout(data).then(
                    response => {
                        return Promise.resolve(response)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            }
            else router.push({name: 'login'})
        },
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        },
        setCartCount(state, data) {
            state.cartCount = data
        }
    },
    getters: {
        getUser: state => {
            return state.user
        },
        getCartCount: state => {
            return state.cartCount
        },
    }
}

export default user
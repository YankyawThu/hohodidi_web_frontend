import ProductService from '../services/product'

const category = {
    namespaced: true,
    actions: {
        fetchHotDeals({ commit }) {
            return ProductService.fetchHotDeals().then(
                response => {
                    return Promise.resolve(response)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },
        fetchProduct({ commit }, cateId) {
            return ProductService.fetchProduct(cateId).then(
                response => {
                    return Promise.resolve(response)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        }
    }
}

export default category
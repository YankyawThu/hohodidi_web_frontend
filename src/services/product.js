import axios from 'axios'

const product = {
    async fetchHotDeals() {
        return await axios.get('/user/hotdeals-list')
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    },
    async fetchProduct(cateId) {
        return await axios.get('/user/product-list', {
            params: {
                offset: import.meta.env.VITE_LIST_OFFSET,
                category_id: cateId ?? '',
                name: ''
            }
        })
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    }
}

export default product
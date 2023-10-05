import axios from 'axios'

const user = {
    async fetch() {
        return await axios.get('/user/user-profile')
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    },
    async fetchCartList() {
        return await axios.get('/user/add-to-cart-list')
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    },
    async addToCart(data) {
        return await axios.post('/user/add-to-cart-store', data)
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    },
    async rmItemFromCart(data) {
        return await axios.post('/user/add-to-cart-delete', data)
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    },
    async update(user) {
        return await axios.post('/user/user-update', {
            type : "data",
            name : user.name,
            oldPassword : user.oldPassword,
            password : user.password,
            dob : user.dob,
            address : user.address,
            gender : user.gender,
            image : user.image
        })
        .then(response => {
            // if (response.data.status) {
            //     localStorage.setItem('user', JSON.stringify(response.data.data))
            // }

            // return response.data.data
        })
    }
}

export default user
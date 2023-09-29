import axios from 'axios'

const category = {
    async fetch() {
        return await axios.get('/user/category-list')
        .then(response => {
            if (response.data.status) {
                return response.data.data
            }
        })
    }
}

export default category
import axios from 'axios'

const auth = {
    async login(user) {
        return await axios.post('/user/user-login', {
            phone: user.phone,
            password: user.password
        })
        .then(response => {
            if (response.data.status) {
                localStorage.setItem('user', JSON.stringify(response.data.data))
            }
            return response.data.data
        })
    },
    logout() {
        localStorage.removeItem('user')
    }
}

export default auth
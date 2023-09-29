import axios from 'axios'

const user = {
    async fetch(data) {
        return await axios.get('/user/user-profile', {
            headers: {
                Authorization: `Bearer ${data}` 
            }
        })
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
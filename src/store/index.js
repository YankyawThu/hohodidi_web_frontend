
import {createStore} from 'vuex'
import category from './category'
import auth from './auth'
import user from './user'
import product from './product'

export default createStore ({
    modules: {
        category: category,
        auth: auth,
        user: user,
        product: product,
    }
})
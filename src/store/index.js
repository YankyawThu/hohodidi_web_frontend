
import {createStore} from 'vuex'
import hotDeal from './hotdeal'
import category from './category'

export default createStore ({
    modules: {
        hotDeal: hotDeal,
        category: category,
    }
})
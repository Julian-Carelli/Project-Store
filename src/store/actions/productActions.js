import {FILTER_PRODUCTS} from '../constants/productsTypes'

export const filterProducts = (type) => (dispatch) => {

    dispatch({
        type: FILTER_PRODUCTS,
        payload:type
    })
}


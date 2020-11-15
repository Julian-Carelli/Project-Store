import {ADD_TO_CART, DELETE_TO_CART, CONFIRM_BUY, ERROR} from '../constants/cartTypes';

export const addToCart = (id) => (dispatch, getState) => {

    const {products} = getState().productsReducer
    const {cart} = getState().cartReducer


    const inmutableProducts = [...products]
    const inmutableCart = [...cart]

    const conditional = inmutableCart.find(cart => cart.id === id)

    if(conditional){
        return 0;
    }

    const newProduct = inmutableProducts.find(product => product.id === id)

    try {
        dispatch({
            type:ADD_TO_CART,
            payload: newProduct
        })
    }
    catch(error){
        dispatch({
            type:ERROR,
            payload: error
        })
    }
}

export const deleteToCart = (id) => (dispatch) => {


    try {
        dispatch({
            type:DELETE_TO_CART,
            payload: id
        })
    }
    catch(error){
        dispatch({
            type:ERROR,
            payload: error
        })
    }
}

export const confirmBuy = () => (dispatch) => {

    dispatch({
        type:CONFIRM_BUY
    })
}
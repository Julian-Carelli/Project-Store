

export const filterProducts = (type) => (dispatch) => {

    dispatch({
        type: 'FILTER_PRODUCTS',
        payload:type
    })
}

export const addProducts = () => (dispatch) => {
    dispatch({
        type:'ADD_PRODUCTS'
    })
}
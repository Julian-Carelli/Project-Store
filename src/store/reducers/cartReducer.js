import {ADD_TO_CART, DELETE_TO_CART, CONFIRM_BUY} from '../constants/cartTypes';

const INITIAL_STATE = {
    cart:[]
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                cart:[...state.cart, action.payload],
            }
        }

        case DELETE_TO_CART: {
            return {
                ...state,
                cart: [...state.cart.filter(item => item.id !== action.payload)]
            }
        }

        case CONFIRM_BUY: {
            return {
                ...state,
                cart:[]
            }
        }

        default: return state;
    }
}
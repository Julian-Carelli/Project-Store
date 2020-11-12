import {POST_USER, GET_USER, DELETE_USER, LOADING, ERROR} from '../constants/registerTypes'


const INITIAL_STATE = {
    user:{},
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case POST_USER:{
            return {
                ...state,
                user: action.payload,
            }
        }

        case GET_USER: {
            return {
                ...state.user,
            }
        }

        case DELETE_USER: {
            return {
                ...state,
                user:{}
            }
        }

        case LOADING: {
            return {
                ...state,
                error:'',
                loading:true,
            }
        }

        case ERROR: {
            return {
                ...state,
                error:action.payload,
                loading:false,
            }
        }
        default: return state;
    }
}
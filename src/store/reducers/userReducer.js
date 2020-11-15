import {POST_USER, GET_USER, LOADING, ERROR} from '../constants/registerTypes';
import {DELETE_USER, ONLINE_USER} from '../constants/loginTypes';


const INITIAL_STATE = {
    user:{},
    offline:{}
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

        case ONLINE_USER: {
            return {
                ...state,
                user:{...state.offline},
                offline:{}
            }
        }

        case DELETE_USER: {
            return {
                ...state,
                offline:{...state.user},
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
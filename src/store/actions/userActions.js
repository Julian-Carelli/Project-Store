import {POST_USER, GET_USER, ERROR} from '../constants/registerTypes';
import {ONLINE_USER, DELETE_USER} from '../constants/loginTypes';

export const postUser = (data) => (dispatch) => {

    try {
        dispatch({
                type: POST_USER,
                payload: data
            })
        
    } 
    catch (error) {
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const getUser = () => (dispatch) => {
    try {
        dispatch({
            type: GET_USER
        })
    }

    catch(error){
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const onlineUser = () => (dispatch) => {
    try {
        dispatch({
            type:ONLINE_USER
        })
    }

    catch(error){
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}

export const deleteUser = () => (dispatch) => {
    try {
        dispatch({
            type:DELETE_USER
        })
    }
    catch(error){
        dispatch({
            type:ERROR,
            payload:error.message
        })
    }
}
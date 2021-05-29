import {
    LOGIN_REQUESTING,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "../../constants/constant";

const initialState = {
    isLogin: false,
    isSuccess: false,
    isError: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUESTING:
            return { ...state, isError: false, isSuccess: false, isLogin: true }
        case LOGIN_ERROR:
            return { ...state, isError: true, isSuccess: false, isLogin: false, payload: payload }
        case LOGIN_SUCCESS:
            return { ...state, isError: false, isSuccess: false, isLogin: true, payload: payload }
        default:
            return state
    }
}

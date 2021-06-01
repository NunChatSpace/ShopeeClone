import {
    LOGIN_REQUESTING,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_INITIALIZE,
    LOGIN_DIALOG_CLOSE,
    LOGIN_DIALOG_DISPLAY
} from "../../constants/constant";

const initialState = {
    isLogin: false,
    isSuccess: false,
    isError: false,
    isDisplay: false,
    dialogMessage: '',
    payload: null
}

export default (state = initialState, { type, payload, message }) => {
    switch (type) {
        case LOGIN_INITIALIZE:
            return {
                isRegister: false,
                isSuccess: false,
                isError: false,
                isDisplay: false,
                dialogMessage: '',
                payload: null
            }
        case LOGIN_REQUESTING:
            return { ...state, isError: false, isSuccess: false, isLogin: true, isDisplay: false }
        case LOGIN_ERROR:
            console.log(payload.data)
            return { ...state, isError: true, isSuccess: false, isLogin: false, isDisplay: true, dialogMessage: payload.data.message }
        case LOGIN_SUCCESS:
            return { ...state, isError: false, isSuccess: false, isLogin: true, isDisplay: false, payload: payload }
        case LOGIN_DIALOG_CLOSE:
            return { ...state, isError: false, isSuccess: false, isLogin: false, isDisplay: false }
        case LOGIN_DIALOG_DISPLAY:
            return { ...state, isError: false, isSuccess: false, isLogin: false, isDisplay: true, dialogMessage: message }
        default:
            return state
    }
}

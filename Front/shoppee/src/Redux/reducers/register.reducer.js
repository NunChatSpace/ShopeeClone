import {
    REGISTER_REQUESTING,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REGISTER_DIALOG_CLOSE,
    REGISTER_DIALOG_DISPLAY,
    REGISTER_INITIALIZE
} from "../../constants/constant";

const initialState = {
    isRegister: false,
    isSuccess: false,
    isError: false,
    isDisplay: false,
    dialogMessage: '',
    payload: null
}

export default (state = initialState, { type, payload, message }) => {
    switch (type) {
        case REGISTER_INITIALIZE:
            return {
                isRegister: false,
                isSuccess: false,
                isError: false,
                isDisplay: false,
                dialogMessage: '',
                payload: null
            }
        case REGISTER_REQUESTING:
            return { ...state, isError: false, isSuccess: false, isRegister: true, isDisplay: false }
        case REGISTER_ERROR:
            return { ...state, isError: true, isSuccess: false, isRegister: false, isDisplay: true, dialogMessage: payload.data.message }
        case REGISTER_SUCCESS:
            return { ...state, isError: false, isSuccess: false, isRegister: true, isDisplay: true, dialogMessage: payload.data.message, payload}
        case REGISTER_DIALOG_CLOSE:
            return { ...state, isError: false, isSuccess: false, isRegister: false, isDisplay: false }
        case REGISTER_DIALOG_DISPLAY:
            return { ...state, isError: false, isSuccess: false, isRegister: false, isDisplay: true, dialogMessage: message }
        default:
            return state
    }
}

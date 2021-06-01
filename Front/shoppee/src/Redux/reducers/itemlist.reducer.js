import {
    ITEMLIST_REQUESTING,
    ITEMLIST_ERROR,
    ITEMLIST_SUCCESS
} from "../../constants/constant";

const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ITEMLIST_REQUESTING:
            return { ...state, isFetching: true, isError: false, isSuccess: false }
        case ITEMLIST_ERROR:
            return { ...state, isFetching: false, isError: true, isSuccess: false }
        case ITEMLIST_SUCCESS:
            return { ...state, isFetching: false, isError: false, isSuccess: true, payload: payload }
        default:
            return state
    }
}

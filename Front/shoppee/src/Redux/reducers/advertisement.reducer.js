import {
    ADVERTISEMENT_FETCHING,
    ADVERTISEMENT_ERROR,
    ADVERTISEMENT_SUCCESS
} from "../../constants/constant";

const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADVERTISEMENT_FETCHING:
            return { ...state, isFetching: true, isError: false, isSuccess: false }
        case ADVERTISEMENT_ERROR:
            return { ...state, isFetching: false, isError: true, isSuccess: false }
        case ADVERTISEMENT_SUCCESS:
            return { ...state, isFetching: false, isError: false, isSuccess: true, payload: payload }
        default:
            return state
    }
}

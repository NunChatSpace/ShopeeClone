import {
    BUY_FETCHING,
    BUY_ERROR,
    BUY_FETCH_SUCCESS
} from "../../constants/constant";

const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_FETCHING:
            return { ...state, isFetching: true, isError: false, isSuccess: false }
        case BUY_ERROR:
            return { ...state, isFetching: false, isError: true, isSuccess: false }
        case BUY_FETCH_SUCCESS:
            return { ...state, isFetching: false, isError: false, isSuccess: true, payload: payload }
        default:
            return state
    }
}

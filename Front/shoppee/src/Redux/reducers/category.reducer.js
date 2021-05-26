import {
    CATEGORY_FETCHING,
    CATEGORY_ERROR,
    CATEGORY_SUCCESS
} from "../../constants/constant";

const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CATEGORY_FETCHING:
            return { ...state, isFetching: true, isError: false, isSuccess: false }
        case CATEGORY_ERROR:
            return { ...state, isFetching: false, isError: true, isSuccess: false }
        case CATEGORY_SUCCESS:
            return { ...state, isFetching: false, isError: false, isSuccess: true, payload: payload }
        default:
            return state
    }
}

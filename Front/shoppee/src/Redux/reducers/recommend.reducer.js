import {
    RECOMMEND_FETCHING,
    RECOMMEND_ERROR,
    RECOMMEND_SUCCESS
} from "../../constants/constant";

const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case RECOMMEND_FETCHING:
            return { ...state, isFetching: true, isError: false, isSuccess: false }
        case RECOMMEND_ERROR:
            return { ...state, isFetching: false, isError: true, isSuccess: false }
        case RECOMMEND_SUCCESS:
            return { ...state, isFetching: false, isError: false, isSuccess: true, payload: payload }
        default:
            return state
    }
}

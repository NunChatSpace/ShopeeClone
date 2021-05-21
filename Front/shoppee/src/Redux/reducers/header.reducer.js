import { 
    HEADER_CLICKED, 
    HEADER_SEARCH,
    HEADER_ERROR 
} from "../../constants/constant";

const initialState = {
    isSearch: false,
    isClicked: false,
    isError: false,
    payload: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case HEADER_CLICKED:
        return { ...state, isError: false, isClicked: true, isSearch: false }
    case HEADER_ERROR:
        return { ...state, isError: true, isClicked: false, isSearch: false }
    case HEADER_SEARCH:
        return { ...state, isError: true, isClicked: false, isSearch: false, payload: payload }
    default:
        return state
    }
}

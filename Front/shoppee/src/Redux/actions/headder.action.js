import { 
    HEADER_CLICKED,
    HEADER_SEARCH,
    HEADER_ERROR 
} from "../../constants/constant"

export const setHeaderStateToClicked = () => ({
    type: HEADER_CLICKED
});

export const setHeaderStateToError = () => ({
    type: HEADER_ERROR
})

export const setHeaderStateToSearch = (payload) => ({
    type: HEADER_SEARCH,
    payload
})
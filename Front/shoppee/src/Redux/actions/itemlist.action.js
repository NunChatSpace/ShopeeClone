import axios from "axios";
import { 
    ITEMLIST_FETCHING,
    ITEMLIST_ERROR,
    ITEMLIST_SUCCESS, 
    ITEMLIST_API
} from "../../constants/constant";

export const setItemListStateToFetching = () => ({
    type: ITEMLIST_FETCHING
});

export const setItemListStateToError = () => ({
    type: ITEMLIST_ERROR
});

export const setItemListStateToSuccess = (payload) => ({
    type: ITEMLIST_SUCCESS,
    payload
});


export const loadItemList = () => {
    return async dispatch => {
        try {
            dispatch(setItemListStateToFetching());
            let result = await axios({
                baseURL: ITEMLIST_API,
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,HEAD,PUT,DELETE,PATCH',
                    'Access-Control-Allow-Headers': 'access-control-allow-origin, Origin, Content-Type, Accept, Content-Length, Authorization',
                }
            });
            
            if (result.status === 200) {
                dispatch(setItemListStateToSuccess(result));
            } else {
                dispatch(setItemListStateToError());
            }
        } catch (error) {
            dispatch(setItemListStateToError());
        }
    }
}

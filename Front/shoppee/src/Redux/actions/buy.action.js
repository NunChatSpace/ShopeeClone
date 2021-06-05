import {
    BUY_FETCHING,
    BUY_ERROR,
    BUY_FETCH_SUCCESS,
    BUY_API
} from "../../constants/constant";
import axios from "axios";

export const setDownloadingStatetoFetching = () => ({
    type: BUY_FETCHING
});

export const setDownloadingStatetoError = () => ({
    type: BUY_ERROR
})

export const setDownloadingStatetoSuccess = (payload) => ({
    type: BUY_FETCH_SUCCESS,
    payload
}) 

export const loadBuy = (data) => {
    return async dispatch => {
        try {
            dispatch(setDownloadingStatetoFetching());
            let result = await axios({
                baseURL: BUY_API,
                method: 'GET',
                params: data,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,HEAD,PUT,DELETE,PATCH',
                    'Access-Control-Allow-Headers': 'access-control-allow-origin, Origin, Content-Type, Accept, Content-Length, Authorization',
                }
            });
            
            if (result.status === 200) {
                dispatch(setDownloadingStatetoSuccess(result));
            } else {
                dispatch(setDownloadingStatetoError());
            }
        } catch (error) {
            dispatch(setDownloadingStatetoError());
        }
    }
}
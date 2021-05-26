import {
    ADVERTISEMENT_FETCHING,
    ADVERTISEMENT_ERROR,
    ADVERTISEMENT_SUCCESS,
    ADVERTISEMENT_API
} from "../../constants/constant";
import axios from "axios";

export const setDownloadingStatetoFetching = () => ({
    type: ADVERTISEMENT_FETCHING
});

export const setDownloadingStatetoError = () => ({
    type: ADVERTISEMENT_ERROR
})

export const setDownloadingStatetoSuccess = (payload) => ({
    type: ADVERTISEMENT_SUCCESS,
    payload
}) 

export const loadAdvertisement = () => {
    return async dispatch => {
        try {
            dispatch(setDownloadingStatetoFetching());
            let result = await axios({
                baseURL: ADVERTISEMENT_API,
                method: 'GET',
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
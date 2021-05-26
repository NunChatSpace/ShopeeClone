import { 
    CATEGORY_FETCHING,
    CATEGORY_ERROR,
    CATEGORY_SUCCESS, 
    CATEGORY_API
} from "../../constants/constant";
import axios from "axios";

export const setDownloadingStatetoFetching = () => ({
    type: CATEGORY_FETCHING
});

export const setDownloadingStatetoError = () => ({
    type: CATEGORY_ERROR
})

export const setDownloadingStatetoSuccess = (payload) => ({
    type: CATEGORY_SUCCESS,
    payload
}) 

export const loadCategory = () => {
    return async dispatch => {
        try {
            dispatch(setDownloadingStatetoFetching);
            let result = await axios({
                baseURL: CATEGORY_API,
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

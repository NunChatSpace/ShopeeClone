import { 
    RECOMMEND_FETCHING,
    RECOMMEND_ERROR,
    RECOMMEND_SUCCESS, 
    RECOMMEND_API
} from "../../constants/constant";
import axios from "axios";

export const setDownloadingStatetoFetching = () => ({
    type: RECOMMEND_FETCHING
});

export const setDownloadingStatetoError = () => ({
    type: RECOMMEND_ERROR
})

export const setDownloadingStatetoSuccess = (payload) => ({
    type: RECOMMEND_SUCCESS,
    payload
}) 

export const loadRecommend = () => {
    return async dispatch => {
        try {
            dispatch(setDownloadingStatetoFetching());
            let result = await axios({
                baseURL: RECOMMEND_API,
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

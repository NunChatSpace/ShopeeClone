
import axios from 'axios';
import {
    LOGIN_REQUESTING,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_DIALOG_CLOSE,
    LOGIN_DIALOG_DISPLAY,
    LOGIN_INITIALIZE,
    REQUESTLOGIN_API
} from '../../constants/constant'

export const setLoginStatetoRequesting = () => ({
    type: LOGIN_REQUESTING
});

export const setLoginStatetoError = (payload) => ({
    type: LOGIN_ERROR,
    payload
});

export const setLoginStatetoSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const setDialogDisplayingStateToClose = () => ({
    type: LOGIN_DIALOG_CLOSE
});

export const setDialogDisplayingStateToDisplay = (message) => ({
    type: LOGIN_DIALOG_DISPLAY,
    message
});

export const setLoginStatetoInitialize = () => ({
    type: LOGIN_INITIALIZE
})

export const loginRequest = (data) => {
    return async dispatch => {
        try {
            dispatch(setLoginStatetoRequesting());
            let result = await axios({
                baseURL: REQUESTLOGIN_API,
                method: 'POST',
                data: data,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,HEAD,PUT,DELETE,PATCH',
                    'Access-Control-Allow-Headers': 'access-control-allow-origin, Origin, Content-Type, Accept, Content-Length, Authorization',
                }
            });
            
            if (result.status === 200) {
                dispatch(setLoginStatetoSuccess(result));
            } else {
                dispatch(setLoginStatetoError(result));
            }
        } catch (error) {
            dispatch(setLoginStatetoError(error.response));
        }
    }
}


export const closeDialog = () => {
    return async dispatch => {
        try {
            dispatch(setDialogDisplayingStateToClose());
        } catch (error) {
            dispatch(setLoginStatetoError(error));
        }
    }
}

export const displayDialog = (data) => {
    return async dispatch => {
        try {
            dispatch(setDialogDisplayingStateToDisplay(data));
        } catch (error) {
            dispatch(setLoginStatetoError(error.response));
        }
    }
}

export const backToInitial = () => {
    return async dispatch => {
        try {
            dispatch(setLoginStatetoInitialize());
        } catch (error) {
            dispatch(setLoginStatetoError(error));
        }
    }
}
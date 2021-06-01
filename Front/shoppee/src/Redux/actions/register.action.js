
import axios from 'axios';
import {
    REGISTER_REQUESTING,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REQUESTREGISTER_API,
    REGISTER_DIALOG_DISPLAY,
    REGISTER_DIALOG_CLOSE,
    REGISTER_INITIALIZE
} from '../../constants/constant'

export const setRegisterStatetoInitialize = () => ({
    type: REGISTER_INITIALIZE
})

export const setRegisterStatetoRequesting = () => ({
    type: REGISTER_REQUESTING
});

export const setDialogDisplayingStateToDisplay = (message) => ({
    type: REGISTER_DIALOG_DISPLAY,
    message
});

export const setDialogDisplayingStateToClose = () => ({
    type: REGISTER_DIALOG_CLOSE
});

export const setRegisterStatetoError = (payload) => ({
    type: REGISTER_ERROR,
    payload
});

export const setRegisterStatetoSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload
});

export const registerRequest = (data) => {
    return async dispatch => {
        try {
            dispatch(setRegisterStatetoRequesting());
            let result = await axios({
                baseURL: REQUESTREGISTER_API,
                method: 'POST',
                data: data,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,HEAD,PUT,DELETE,PATCH',
                    'Access-Control-Allow-Headers': 'access-control-allow-origin, Origin, Content-Type, Accept, Content-Length, Authorization',
                }
            });
            
            if (result.data.status === 201) {
                dispatch(setRegisterStatetoSuccess(result));
            } else {
                dispatch(setRegisterStatetoError(result));
            }
        } catch (error) {
            debugger
            dispatch(setRegisterStatetoError(error.response));
        }
    }
}

export const closeDialog = () => {
    return async dispatch => {
        try {
            dispatch(setDialogDisplayingStateToClose());
        } catch (error) {
            dispatch(setRegisterStatetoError(error));
        }
    }
}

export const displayDialog = (data) => {
    return async dispatch => {
        try {
            dispatch(setDialogDisplayingStateToDisplay(data));
        } catch (error) {
            dispatch(setRegisterStatetoError(error));
        }
    }
}

export const backToInitial = () => {
    return async dispatch => {
        try {
            dispatch(setRegisterStatetoInitialize());
        } catch (error) {
            dispatch(setRegisterStatetoError(error));
        }
    }
}
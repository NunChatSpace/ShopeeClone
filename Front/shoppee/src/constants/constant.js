// STATE TYPE
export const HEADER_CLICKED = 'HEADER_CLICKED';
export const HEADER_ERROR = 'HEADER_ERROR';
export const HEADER_SEARCH = 'HEADER_SEARCH';

export const CATEGORY_FETCHING = 'CATEGORY_FETCHING';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';

export const RECOMMEND_FETCHING = 'RECOMMEND_FETCHING';
export const RECOMMEND_ERROR = 'RECOMMEND_ERROR';
export const RECOMMEND_SUCCESS = 'RECOMMEND_SUCCESS';

export const ADVERTISEMENT_FETCHING = 'ADVERTISEMENT_FETCHING';
export const ADVERTISEMENT_ERROR = 'ADVERTISEMENT_ERROR';
export const ADVERTISEMENT_SUCCESS = 'ADVERTISEMENT_SUCCESS';

export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REGISTER_INITIALIZE = 'REGISTER_INITIALIZE';
export const REGISTER_REQUESTING = 'REGISTER_REQUESTING';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_DIALOG_DISPLAY = 'REGISTER_DIALOG_DISPLAY';
export const REGISTER_DIALOG_CLOSE = 'REGISTER_DIALOG_CLOSE';

// Constant value
export const REGISTER_STATUS_SUCCESS = 201;

// API
export const HOST = 'http://localhost:8080'
export const API_SERVICE = HOST + '/api'
export const API_AUTHEN_SERVICE = HOST + '/authen'
export const INIT_API = API_SERVICE + '/init';
export const CATEGORY_API = API_SERVICE + '/category';
export const RECOMMEND_API = API_SERVICE + '/recommend';
export const ADVERTISEMENT_API = API_SERVICE + '/advertisement';
export const REQUESTLOGIN_API = API_AUTHEN_SERVICE + '/login';
export const REQUESTREGISTER_API = API_AUTHEN_SERVICE + '/register';
import { combineReducers } from "redux";
import categoryReducer from './category.reducer';
import headerReducer from './header.reducer';
import recommendReducer from './recommend.reducer';
import advertisementReducer from './advertisement.reducer';

export default combineReducers({
    headerReducer,
    categoryReducer,
    recommendReducer,
    advertisementReducer
})
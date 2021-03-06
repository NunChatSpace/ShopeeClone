import { combineReducers } from "redux";
import categoryReducer from './category.reducer';
import headerReducer from './header.reducer';
import recommendReducer from './recommend.reducer';
import advertisementReducer from './advertisement.reducer';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';
import itemlistReducer from './itemlist.reducer';
import buyReducer from './buy.reducer';

export default combineReducers({
    headerReducer,
    categoryReducer,
    recommendReducer,
    advertisementReducer,
    loginReducer,
    registerReducer,
    itemlistReducer,
    buyReducer
})
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scheduleReducer from './schedule-reducer';
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    form: formReducer,
    schedules: scheduleReducer,
    products: productsReducer,
    total: cartReducer
});

export default rootReducer;

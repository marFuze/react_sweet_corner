import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scheduleReducer from './schedule-reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    schedules: scheduleReducer,
    products: productsReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scheduleReducer from './schedule-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    schedule: scheduleReducer
});

export default rootReducer;

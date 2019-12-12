import types from '../actions/types';

const DEFAULT_STATE = {
   
};

export default (state = DEFAULT_STATE, action) => {

    switch(action.type){
        case types.GET_CART_TOTALS:
            return {...state, total: action.total};
        default:
            return state;
    }
}

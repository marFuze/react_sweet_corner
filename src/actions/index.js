import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export function getScheduleData(){
    return async  function (dispatch) {
        const resp = await axios.get('/data/schedule.json');

        //console.log('Get Schedule Data Response', resp);

        dispatch({
            type: types.GET_SCHEDULE_DATA,
            schedules: resp.data.schedule
        });
    }
}

export function getAllProducts(){
    return async function (dispatch) {
        try {
            const resp = await axios.get(BASE_URL + '/api/products');
            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            });
        } catch(err) {
            console.log('Error getting all products:', err);
        }
    }
}

export function getCartTotals(){
    return async function (dispatch) {
        try {

            console.log('Get cart totals action creator');

            const cartToken = localStorage.getItem('sc-cart-token');

            const axiosConfig = {
                headers: {
                    'x-cart-token': cartToken
                }
            }


            const resp = await axios.get(BASE_URL + '/api/cart/totals',axiosConfig);


            dispatch({
                type: types.GET_CART_TOTALS,
                total: resp.data.total
            });

            console.log('cart totals resp',resp);
            
        } catch(err) {
            console.log('Error getting cart totals:', error);
        }
    }
}
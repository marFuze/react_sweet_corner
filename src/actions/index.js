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
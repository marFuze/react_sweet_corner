import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export function getScheduleData(){
    return async  function (dispatch) {
        const resp = await axios.get('/data/schedule.json');
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

export function getProductDetails(productId){
    return async function (dispatch) {
        try {
            const resp = await axios.get(`${BASE_URL}/api/products/${productId}`);
            dispatch({
                type: types.GET_PRODUCT_DETAILS,
                product: resp.data
            });
        } catch(err) {
            console.log('Error getting product details:', err);
        }
    }
}

export function clearProductDetails(){
        return {
            type: types.CLEAR_PRODUCT_DETAILS
        }
    }

export function addItemToCart(productId, quantity){
    return async function (dispatch) {
        try {
            console.log('From Action Creator, quantity: ',quantity ,'Product ID:', productId);

            const cartToken = localStorage.getItem('sc-cart-token');

            const axiosConfig = {
                headers: {
                    'x-cart-token': cartToken
                }
            }

            const resp = await axios.post(BASE_URL + '/api/cart/items/' + productId,{
                quantity: quantity
             },axiosConfig);

             localStorage.setItem('sc-cart-token', resp.data.cartToken);
             //console.log('add to cart resp', resp);
             dispatch({
                type: types.ADD_ITEM_TO_CART,
                cartTotal: resp.data.total
            });

        } catch(err){
            console.log('Error adding item to cart', err);
        } 
    }
}

export function getActiveCart() {
    return async function (dispatch) {
    try {
        //console.log('Get active cart action creator');

        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers : {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.get(BASE_URL + '/api/cart',axiosConfig
        );

        //console.log('get active cart serv resp', resp);

        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        })

    } catch(err) {
        console.log('Error getting active cart', err);
    }
}
}


export function getCartTotals(){
    return async function (dispatch) {
        try {

            const cartToken = localStorage.getItem('sc-cart-token');

            const axiosConfig = {
                headers: {
                    'x-cart-token': cartToken
                }
            }

            const resp = await axios.get(BASE_URL + '/api/cart/totals',axiosConfig);

            //console.log('Get cart totals action creator', resp);

            dispatch({
                type: types.GET_CART_TOTALS,
                total: resp.data.total
            });

        } catch(err) {
            console.log('Error getting cart totals:', error);
        }
    }
}

export function createGuestOrder(guest){
    return async function (dispatch) {
        try {

            console.log('Create guest order, guest data:', guest);

            const cartToken = localStorage.getItem('sc-cart-token');

            const axiosConfig = {
                headers: {
                    'x-cart-token': cartToken
                }
            }

            const resp = await axios.post(BASE_URL + '/api/orders/guest', guest, axiosConfig);
            localStorage.removeItem('sc-cart-token');
            console.log('Create guest order response:', resp);

            dispatch({
                type: types.CREATE_GUEST_ORDER,
                order: {
                    id: resp.data.id, // The order ID from the server goes here
                    message: resp.data.message // The message from the server goes here 
                }
            
            });

            return {
                email: guest.email,
                orderId: resp.data.id
            };

        } catch(err) {
            console.log('Error creating guest order:', err);
        }
    }
}
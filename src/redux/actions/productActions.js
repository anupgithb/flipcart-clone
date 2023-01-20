import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://flipcart-clone-exact-backend.onrender.com/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProduct1s = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://flipcart-clone-exact-backend.onrender.com/product1s`);
        dispatch({ type: actionTypes.GET_PRODUCTS1_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS1_FAIL, payload: error.response });
    }
};


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`https://flipcart-clone-exact-backend.onrender.com/product/${id}`);
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});

    }
};

//use reducer hook vv importsnt for interveiw


/*

const response = await axios.get(`https://flipcart-clone-exact-backend.onrender.com/products`);
yha response se data nikal rhe hai.... By object destructuring
const { data } = await axios.get(`https://flipcart-clone-exact-backend.onrender.com/products`);

response = {
 config :{},
 data:[],
 headers: {},
 status :200,
 messege..........
}
*/
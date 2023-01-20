import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


import { getProductReducer,getProduct1Reducer,getProductDetailsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts : getProductReducer,
    getProduct1s : getProduct1Reducer,
    getProductDetails: getProductDetailsReducer,
    cart : cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
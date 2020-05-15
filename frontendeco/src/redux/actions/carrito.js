import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// ADD CARRITO
export const addCart = (product) => {
    store.dispatch({ 
        type: 'ADD_CART',
        payload: product
    });
}

// CLEAR CARRITO
export const clearCart = () => {
    store.dispatch({ 
        type: 'CLEAR_CART',
        payload: undefined
    });
}

// CLEAR ONE PRODUCT
export const clearOneProduct = (product) => {

    const manolo = store.getState()
    console.log(manolo.cart)
    product = manolo.cart.splice(product._id, 1)
    console.log(product, manolo.cart)
    store.dispatch({ 
        type: 'CLEAR_ONE_PRODUCT',
        payload: manolo.cart
    });
}


export const comprar = async(products) => {
    const res = await axios.post(API_URL + '/products/add')
    store.dispatch({ 
        type: 'COMPRAR',
        payload: res.data
    });
};

export const productCesta = (product) => {
    store.dispatch({ 
        type: 'PRODUCT_CESTA',
        payload: product
    });
};

export const productValue = (value) => {
    store.dispatch({ 
        type: 'PRODUCT_VALUE',
        payload: value
    });
};
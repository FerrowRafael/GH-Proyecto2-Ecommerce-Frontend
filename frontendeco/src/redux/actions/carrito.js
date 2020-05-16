import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// ADD CART
export const addCart = (cart) => {
    store.dispatch({ 
        type: 'ADD_CART',
        payload: cart
    });
}

// ADD CANTIDAD
export const addCantCart = (id) => {
    store.dispatch({ 
        type: 'ADD_CANT_CART',
        payload: id
    });
}

// SUBSTRACT CANTIDAD
export const subCantCart = (id) => {
    store.dispatch({ 
        type: 'SUB_CANT_CART',
        payload: id
    });
}

// CLEAR CARRITO
export const emptyCart = () => {
    store.dispatch({ 
        type: 'EMPTY_CART',
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
        type: 'REMOVE_ONE_PRODUCT',
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
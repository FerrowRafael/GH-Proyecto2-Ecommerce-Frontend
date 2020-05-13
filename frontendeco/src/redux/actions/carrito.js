import store from '../store';


// ADD CARRITO
export const addCart = async(product) => {
    store.dispatch({ 
        type: 'ADD_CART',
        payload: product
    });
}
import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// GET ALL PRODUCTS
export const productsAll = async() => {
    const res = await axios.get(API_URL + '/products/all')
    store.dispatch({ 
        type: 'PRODUCTS_ALL',
        payload: res.data
    });
};

// NOMBRE BUSQUEDAS
export const rdx_resultName = (resultName) => {
	store.dispatch({
		type: 'SEARCH_NAME',
		payload: resultName
	})
};

// SEARCH RESULT
export const rdx_result = async(busqueda) => {
    const res = await axios.get('http://localhost:3001/products/search/name=' + busqueda)
	store.dispatch({
		type: 'SEARCH_RESULT',
		payload: res.data
	})
};

// INSERT PRODUCT
export const insert = async(product) => {
    await axios.post(API_URL + 'products', product);
    // return getAllProducts();
}

// UPDATE PRODUCT
export const update = async(product_id, product) => {
    await axios.put(API_URL + 'products/' + product_id, product);
    // return getAllProducts();
}

// DELETE ONE PRODUCT
export const deleteOne = async(product_id) => {
    await axios.delete(API_URL + 'products/' + product_id);
    // return getAllProducts();
}
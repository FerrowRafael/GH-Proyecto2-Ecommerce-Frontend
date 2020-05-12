import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// PRODUCTSALL
export const productsAll = async() => {
    const res = await axios.get(API_URL + '/products/all')
    store.dispatch({ 
        type: 'PRODUCTSALL',
        payload: res.data
    });
}
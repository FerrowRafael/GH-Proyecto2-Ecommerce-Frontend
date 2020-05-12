import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// LOGIN
export const login = async(user) => {
    const res = await axios.post(API_URL + '/users/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
}
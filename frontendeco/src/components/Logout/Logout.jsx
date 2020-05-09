import axios from 'axios';
import { API_URL } from '../../api-config';

const Logout = async() => {
    const res = await axios.get(API_URL + 'users/logout', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    return res;
}

export default Logout
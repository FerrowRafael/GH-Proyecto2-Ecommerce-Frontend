import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
// import './ProductsRecent.scss'
import Product from '../Product/Product';

const ProductsRecent = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/products/recent')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
        <div className="products">
            {products.slice(0,6).map(product => <Product product={product}/>)}
        </div>
    )
}
export default ProductsRecent;
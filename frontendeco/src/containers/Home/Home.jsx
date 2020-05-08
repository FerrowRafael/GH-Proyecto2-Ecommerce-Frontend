import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import './Home.scss'
import Product from '../../components/Product/Product';
import ProductsRecent from '../../components/ProductsRecent/ProductsRecent';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/products/all')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
        <div>
            <div className="products">
                <h2>Home</h2>
                {products.map(product => <Product product={product}/>)}
            </div>
            <div className="productsRecent">
                <ProductsRecent/>
            </div>
        </div>
            

    )
}
export default Home;
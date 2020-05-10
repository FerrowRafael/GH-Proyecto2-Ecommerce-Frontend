import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import { Row, Col } from 'antd';
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
            <h2>Todos los productos</h2>
            <div className="products">
                {products.map(product => <Product product={product}/>)}
            </div>
            <div className="productsRecent">
                <h2>Productos añadidos recientemente</h2>
                <ProductsRecent/>
            </div>
        </div>
            

    )
}
export default Home;
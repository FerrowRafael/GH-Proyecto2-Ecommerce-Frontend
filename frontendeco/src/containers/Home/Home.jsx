import React, { useEffect, useState } from 'react'
// import { Row, Col } from 'antd';
import './Home.scss'
import { productsAll } from '../../redux/actions/products';
import Product from '../../components/Product/Product';
import ProductsRecent from '../../components/ProductsRecent/ProductsRecent';
import { connect } from "react-redux";

const Home = (props) => {

    useEffect(() => {
        productsAll()
    }, [])
    console.log(props.product)
    return (
        <div>
            <h2>Todos los productos</h2>

            <div className="products">
                {(props.product)?.map(product => <Product key={product._id} product={product}/>)}
            </div>


            <div className="productsRecent">
                <h2>Productos añadidos recientemente</h2>
                <ProductsRecent/>
            </div>
        </div>


    )
}
const mapStateToProps = (state) => ({ product: state.product })
export default connect(mapStateToProps)(Home);
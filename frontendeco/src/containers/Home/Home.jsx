import React, { useEffect, useState } from 'react'
// import { Row, Col } from 'antd';
import './Home.scss'
import { productsAll } from '../../redux/actions/products';
import Product from '../../components/Product/Product';
import ProductsRecent from '../../components/ProductsRecent/ProductsRecent';
import { Carousel } from 'antd';
import { connect } from "react-redux";

const Home = (props) => {

    useEffect(() => {
        productsAll()
    }, [])


    return (
        <div className="wrapper">
            <Carousel className="carousel" autoplay>
                <div>
                    <img src="https://i.blogs.es/9e3b55/281018-fallout76-beta1-preview/1366_2000.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://i.blogs.es/9e3b55/281018-fallout76-beta1-preview/1366_2000.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://i.blogs.es/9e3b55/281018-fallout76-beta1-preview/1366_2000.jpg" alt=""/>
                </div>
                <div>
                    <img src="https://i.blogs.es/9e3b55/281018-fallout76-beta1-preview/1366_2000.jpg" alt=""/>
                </div>
            </Carousel>


            <h2>Todos los productos</h2>
            <div className="products">
                {(props.products)?.slice(0, 6).map(product => <Product key={product._id} product={product}/>)}
            </div>


            <div className="productsRecent">
                <h2>Novedades</h2>
                <ProductsRecent/>
            </div>
        </div>


    )
}
const mapStateToProps = (state) => ({ products: state.products })
export default connect(mapStateToProps)(Home);
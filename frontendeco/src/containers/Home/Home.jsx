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
                    <img style={{ marginLeft: '900px'}}src="https://3.bp.blogspot.com/-vOr2YQGdiAM/XKzbNfrK7rI/AAAAAAAASkA/7Kx1017J89IOxOFdSBH4d90_qiAwjWK3QCLcBGAs/s1600/camisetas-frikis.jpg" style={{width: "60em"}} alt=""/>
                </div>
                <div>
                    <img style={{ marginLeft: '90px',marginTop: '-120px',width: '1200px'}} src="https://juiceonline.com/app/uploads/2020/01/ghibli1.jpg" alt=""/>
                </div>
                <div>
                    <img style={{ marginLeft: '-80px'}}src="https://2.bp.blogspot.com/-wFqlZW9RH2c/WSN7A3Q1evI/AAAAAAAHqA8/HyA0c76710sVtnSnmNMkPT_JPfGlmmWNwCLcB/s1600/avengers-poster2.jpg" alt=""/>
                </div>
                
            </Carousel>


            <h2>Nuestros productos</h2>
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
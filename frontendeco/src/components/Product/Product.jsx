import React from 'react'
import { Link } from 'react-router-dom'
import { addCart } from '../../redux/actions/carrito';
import { clearOneProduct } from '../../redux/actions/carrito';
import { Col, Card } from 'antd';
import './Product.scss'

import { ShoppingCartOutlined } from '@ant-design/icons';

const Product = ({ product }) => {

    return (
        <div>
            <Link className="product" key={product._id} to={'/product/'+product._id}>
                <Card
                    hoverable
                    style={{ width: 400 }}
                    cover={<img src={product.image_path} alt="" />}
                >
                <Col>{product.name}</Col>
                <Col>{product.price} €</Col>
                </Card>
            </Link>
            
        </div>
    
    )
}
export default Product;
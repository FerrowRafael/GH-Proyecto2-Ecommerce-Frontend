import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'antd';
import './Product.scss'
import { addCart } from '../../redux/actions/carrito';
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
                <ShoppingCartOutlined onClick={()=>addCart(product)} />
                </Card>
            </Link>
            
        </div>
    
    )
}
export default Product;
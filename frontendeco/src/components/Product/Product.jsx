import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'antd';
import './Product.scss'

const Product = ({ product }) => {

    return (
        <div>
            <Row>
                <Link className="product" key={product._id} to={'/product/'+product._id}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img src={product.image_path} alt="" />}
                    >
                    <Col>{product.name}</Col>
                    <Col>{product.price} €</Col>
                    </Card>
                </Link>
            </Row>  
        </div>
    )
}
export default Product;
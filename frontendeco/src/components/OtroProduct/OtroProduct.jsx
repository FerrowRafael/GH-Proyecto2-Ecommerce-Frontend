import React, { useEffect, useState } from 'react'

import { productCesta, productValue } from '../../redux/actions/carrito';
import { Col, Card } from 'antd';
// import './Product.scss'
import { InputNumber } from 'antd';


const OtroProduct = ({ product }) => {
   
    const [total,  setTotal] = useState(product?.price) 
    console.log(product)
    useEffect(() => {
        // console.log(4*product.price)
    }, [])

    function onChange(value) {
        setTotal(value*product?.price)
        console.log(total)
        console.log(value)
        productCesta(product)
        productValue(value)
    }

    
    return (
        <div>
            <div className="product" key={product?._id}>
                <Card
                    hoverable
                    style={{ width: 400 }}
                    cover={<img src={product?.image_path} alt="" />}
                >
                <Col>{product?.name}</Col>
                <Col>{product?.price} €</Col>
                <Col>{total}</Col>

                <InputNumber  min={1} max={10} defaultValue={1} onClick={()=>setTotal(total)} onChange={onChange} />
                
                </Card>
            </div>
            
        </div>
    
    )
}
export default OtroProduct;
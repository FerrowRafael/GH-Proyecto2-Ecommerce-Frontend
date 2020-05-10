import React, { Component } from 'react'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
import { Row, Col } from 'antd';

// import { Row, Col } from 'antd';

export default class RegisterLogin extends Component {
  
    render(){
        return(
            <Row className="registerLogin">
                <Col span={12} className="register">
                    <Register/>
                </Col>
                <Col span={12}className="login">
                    <Login/>
                </Col>
             
                
            </Row>
        )
    }
}

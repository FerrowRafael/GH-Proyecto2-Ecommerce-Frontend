import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, notification, Col } from 'antd';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/users';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    const emailInput = useRef(null);
    const history = useHistory();//props.history

    useEffect(() => {
        emailInput.current.focus()
    }, [])

    const onFinish = user => {
      login(user)
      .then(()=>{
        notification.success({
            message: 'Usuario conectado éxito'
        });
        history.push('/home') //this.router.navigate(['/login]) en angular
      })
      .catch(error=>{
          console.error(error)
          notification.error({
            message: 'Credenciales inválidas',
            description:'Email y/o contraseñas no válidas'
        })
      })
    };

    return (
        <div className="loginContainer">
            <Col span={6} col-6 className="registerright">
                <img style={{width: "365px"}}src="https://vignette.wikia.nocookie.net/mario-fanon/images/1/1d/Shy_Guy_Artwork.png/revision/latest/scale-to-width-down/340?cb=20160102180040&path-prefix=es" alt=""/>
            </Col>
            <Col>
                <Form
                    className="loginForm"
                    {...layout}
                    name="basic"
                    // initialValues={{email:'yo@yo.yo', password: '12345' }}
                    onFinish={onFinish}
                    onFinishFailed={console.error} >
                    <h3>Login</h3>
                    <Form.Item
                        label="Email"
                        name="email"
                        id="email"
                        rules={[{ required: true, message: 'El email es requerido' }]}
                    >
                        <Input prefix={<MailOutlined />} ref={emailInput}/>
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        id="password"
                        rules={[{ required: true, message: 'La contraseña es requerida' }]}
                    >
                        <Input.Password prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Conectarse
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </div>
    );
}
export default Login;
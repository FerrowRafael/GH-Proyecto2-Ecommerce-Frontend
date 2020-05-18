import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/users';
import { connect } from "react-redux";
import { Badge, Icon } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import { Button } from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantUnit: this.props.cart.reduce((sum, i) => {
                return sum +  i.unit
              }, 0),
        }
    }
    
    componentWillReceiveProps(){
        let unitTotal = this.props.cart.reduce((sum, i) => {
            return sum +  i.unit
          }, 0)
          console.log(unitTotal, this.cart?.unit)
          this.setState({cantUnit:unitTotal})
          console.log(this.state.cantUnit)
        
    }
    

    render(){
        console.log(this.props.user)
        return (
            
            <header className="header">
            
                <div className="leftHeader">
                    <NavLink to="/home"><img src="https://vignette.wikia.nocookie.net/fallout/images/0/06/VaultTecLogo.png/revision/latest?cb=20190908160136" style={{width: "60px"}} alt=""/></NavLink>
                    <NavLink to="/home" exact>Home</NavLink>
                    {/* <NavLink to="/results" exact>Products</NavLink> */}
                </div>
                
                <div className="search">
                    <Search/>
                </div>
                
                {this.props.user ?
                <div className="userZone">
                    <NavLink to="/" exact><small>Bienvenido,</small> {this.props.user.userName}</NavLink>
                    <NavLink to="/carrito" exact>
                        <Badge count={this.state.cantUnit}>
                            {/* <Icon type="message" style={{ fontSize: '16px', color: '#08c' }} theme="outlined" /> */}
                            {/* <ShoppingCartOutlined className="head-example"/> */}
                            <ShoppingCartOutlined style={{ fontSize: '32px' }} />
                        </Badge>
                    </NavLink>
                    
                    <NavLink type="link" onClick={logout} to="/home">Logout</NavLink>
                </div>
                :
                <div className="guestZone">
                    <NavLink to="/register" exact>Registro</NavLink>
                    <NavLink to="/login" exact>Login</NavLink>
                </div>
            }
            
            </header>
        )
    }
    
}
const mapStateToProps = (state) => ({ user: state.user, cart:state.cart })
export default connect(mapStateToProps)(Header);
import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/users';
import { connect } from "react-redux";
import { Button } from 'antd';

class Header extends Component {
    

    render(){
        console.log(this.props.user)
        return (
            
            <header className="header">
            
                <div className="leftHeader">
                    <NavLink to="/home" exact>Logo</NavLink>
                    <NavLink to="/home" exact>Home</NavLink>
                    <NavLink to="/results" exact>Products</NavLink>
                </div>
                
                <div className="search">
                    <Search/>
                </div>
                
                {this.props.user ?
                <div className="userZone">
                    <p>Bienvenido, {this.props.user.userName}</p>
                    <NavLink to="/carrito" exact>Carrito</NavLink>
                    <Button type="link" onClick={logout}>Logout</Button>
                </div>
                :
                <div className="guestZone">
                    <NavLink to="/login" exact>Login</NavLink>
                    <NavLink to="/register" exact>Registro</NavLink>
                </div>
            }
            
            </header>
        )
    }
    
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);
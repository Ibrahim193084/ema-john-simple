import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
import useAuth from './../../hooks/useAuth';


const Header = () => {
    const {user,logOut} = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
      }
  
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop" activeStyle={activeStyle}>Shop</NavLink>
                <NavLink to="/review"activeStyle={activeStyle}>Order Review</NavLink>
                <NavLink to="/inventory"activeStyle={activeStyle}>Manage Inventory Here</NavLink>
               {user.email && <span style={{ color: 'white',marginLeft:'500px' }}>Hello {user.displayName}</span>}
                {
                    user.email ?
                        <button className="btn-regular" onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;
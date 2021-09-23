import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="orders">Order Review</a>
                <a href="inventory">Manage Inventory Here</a>
            </nav>
            <div className="input-div">
                <input className="input" type="text" placeholder="Search" /><span style={{color: 'white', fontWeight: '800'}}>{element}<small style={{color: 'rgb(240, 187, 53)'}}>0</small></span>
            </div>
        </div>
    );
};

export default Header;
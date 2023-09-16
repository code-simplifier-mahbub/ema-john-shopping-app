import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <img src= {logo} alt="" />
            <div className="header-nav">
                <ul>
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">Order </Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/about">About</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
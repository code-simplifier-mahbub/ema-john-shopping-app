import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img src= {logo} alt="" />
            <div className="header-nav">
                <ul>
                    <li><a href="./order">Order</a></li>
                    <li><a href="./review">Order Review</a></li>
                    <li><a href="./inventory">Manage Inventory</a></li>
                    <li><a href="./login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='Header-components'>
            <div className='Header-logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='Header-item'>
                <a href="/Oder">Oder</a>
                <a href="/oderReview">Oder Review</a>
                <a href="/Inventory">inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;

import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <div className="Header__top">
                <ul className="Header__left-params">
                   <li>Call</li>
                   <li>English</li>
                   <li>Call us: (012) 3456 7890</li>
                </ul>
                <ul className="Header__nav">
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>My Cart</li>
                    <li>Checkout</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

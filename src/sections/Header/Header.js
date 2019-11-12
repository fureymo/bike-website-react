
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <div className="Header__top">
                <ul className="Header__left-params">
                   <li>usd</li>
                   <li>English</li>
                   <li>Call us: (012) 3456 7890</li>
                </ul>
                <ul className="Header__nav">
                    <a href="#" className="Header__nav-item"><li>My Account</li></a>
                    <a href="#" className="Header__nav-item"><li>Wishlist</li></a>
                    <a href="#" className="Header__nav-item"><li>My Cart</li></a>
                    <a href="#" className="Header__nav-item"><li>Checkout</li></a>
                    <a href="#" className="Header__nav-item Header__nav-item_noborder"><li>Login</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Header;

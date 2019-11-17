
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <div className="Header__top">
                <ul className="Header__left-params">
                   <li className="Header__left-params-item">
                       <select>
                           <option>USD</option>
                           <option>EUR</option>
                           <option>RUB</option>
                       </select>
                   </li>
                   <li className="Header__left-params-item">English</li>
                   <li className="Header__left-params-item Header__left-params-item_noborder">Call us: (012) 3456 7890</li>
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

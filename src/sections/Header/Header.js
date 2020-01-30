
import React from 'react';
import './Header.scss';

class Header extends React.PureComponent {
    render() {
        return (
            <section className="Header">
                <div className="Header__top">
                    <ul className="Header__left-params">
                        <li className="Header__left-params-item Header__left-params-item_value">
                            <select className="Header__select-style">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                            </select>
                            <div className="Header__icon-angle Header__icon-angle_value">
                                <i className="fas fa-angle-down"/>
                            </div>
                        </li>
                        <li className="Header__left-params-item">
                            <select className="Header__select-style">
                                <option>English</option>
                                <option>Russian</option>
                                <option>Spanish</option>
                            </select>
                            <div className="Header__icon-angle Header__icon-angle_language">
                                <i className="fas fa-angle-down"/>
                            </div>
                        </li>
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
            </section>
        );
    }
}

export default Header;


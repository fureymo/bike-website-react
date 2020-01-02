
import React from 'react';
import './DealSection.scss';

function DealSection() {
    return (
        <section className="DealSection">
            <div className="DealSection__image"/>
            <div className="DealSection__info-block">
                <ul className="DealSection__timer-list">
                    <li className="DealSection__timer-item">
                        <div className="DealSection__timer-number">120</div>
                        <div className="DealSection__timer-period">days</div>
                    </li>
                    <li className="DealSection__timer-item">
                        <div className="DealSection__timer-number">09</div>
                        <div className="DealSection__timer-period">hour</div>
                    </li>
                    <li className="DealSection__timer-item">
                        <div className="DealSection__timer-number">38</div>
                        <div className="DealSection__timer-period">min</div>
                    </li>
                    <li className="DealSection__timer-item">
                        <div className="DealSection__timer-number">57</div>
                        <div className="DealSection__timer-period">sec</div>
                    </li>
                </ul>
                <div className="DealSection__name-section">
                    <h5 className="DealSection__subtitle">Propel Advanced Pro Frameset</h5>
                    <ul className="DealSection__stars">
                        <li className="DealSection__star-item">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="DealSection__star-item">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="DealSection__star-item">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="DealSection__star-item">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="DealSection__star-item">
                            <i className="fas fa-star-half-alt"/>
                        </li>
                    </ul>
                    <div className="DealSection__cost">$2,290.00</div>
                </div>
                <div className="DealSection__color-stock">
                    <div>
                        <div className="DealSection__color">Color:</div>
                        <ul className="DealSection__pager">
                            <li className="DealSection__pager-button DealSection__pager-button_1"/>
                            <li className="DealSection__pager-button DealSection__pager-button_2"/>
                            <li className="DealSection__pager-button DealSection__pager-button_3"/>
                            <li className="DealSection__pager-button DealSection__pager-button_4"/>
                            <li className="DealSection__pager-button DealSection__pager-button_5"/>
                        </ul>
                    </div>
                    <div className="DealSection__in-stock">In stock: <span>10</span></div>
                </div>
                <div className="DealSection__button-block">
                    <button type="button" className="DealSection__button DealSection__button_cart">
                           <span className="DealSection__button-symbol">
                        <i className="fas fa-shopping-bag"/>
                    </span>
                        add to cart
                    </button>
                    <button type="button" className="DealSection__button DealSection__button_wishlist">
                        <span className="DealSection__button-symbol">
                        <i className="far fa-heart"/>
                    </span>
                        add to wishlist</button>
                </div>
            </div>
        </section>
    );
};

export default DealSection;
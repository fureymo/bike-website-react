
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
                <h5 className="DealSection__subtitle">Propel Advanced Pro Frameset</h5>
                <ul className="DealSection__stars">
                    <li className="DealSection__star-item"></li>
                    <li className="DealSection__star-item"></li>
                    <li className="DealSection__star-item"></li>
                    <li className="DealSection__star-item"></li>
                    <li className="DealSection__star-item"></li>
                </ul>
                <div>Color
                    <ul>
                        <li className="DealSection"/>
                        <li className="DealSection"/>
                        <li className="DealSection"/>
                        <li className="DealSection"/>
                        <li className="DealSection"/>
                    </ul>
                </div>
                <div>add to cart</div>
            </div>
        </section>
    );
};

export default DealSection;
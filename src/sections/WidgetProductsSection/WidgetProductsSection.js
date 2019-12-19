
import React from 'react';
import './WidgetProductsSection.scss';

function WidgetProductsSection() {
    return (
        <section className="WidgetProductsSection">
            <div className="WidgetProductsSection__top-group">
                <h3 className="WidgetProductsSection__header">Widget products</h3>
                <ul>
                    <a href="#" className="WidgetProductsSection__category"><li >Baby Seats</li></a>
                    <a href="#" className="WidgetProductsSection__category"><li >Bells</li></a>
                    <a href="#" className="WidgetProductsSection__category"><li >Bottle Cages</li></a>
                    <a href="#" className="WidgetProductsSection__category"><li >Fenders</li></a>
                    <a href="#" className="WidgetProductsSection__category"><li >View all</li></a>
                </ul>
            </div>
            <ul className="WidgetProductsSection__products">
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content"/>
                    <div className="WidgetProductsSection__product-name">Rack-It Disc Rack</div>
                    <div className="WidgetProductsSection__product-price">$1100.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Propel P-TRX1 29er Alloy Trail</div>
                    <div className="WidgetProductsSection__product-price">$320.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Propel SureLock Protector 1 LS</div>
                    <div className="WidgetProductsSection__product-price">$65.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Propel Liv/giant Sport Pedals</div>
                    <div className="WidgetProductsSection__product-price">$48.00</div>
                </li>
            </ul>
            <ul className="WidgetProductsSection__products WidgetProductsSection__products_second-line">
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content"/>
                    <div className="WidgetProductsSection__product-name">Liv Connect Forward</div>
                    <div className="WidgetProductsSection__product-price">$15.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Cyclotron Mag II Trainer</div>
                    <div className="WidgetProductsSection__product-price">$180.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Comfort DX Grips</div>
                    <div className="WidgetProductsSection__product-price">$12.00</div>
                </li>
                <li className="WidgetProductsSection__product-block">
                    <div className="WidgetProductsSection__product-content">
                    </div>
                    <div className="WidgetProductsSection__product-name">Liv Rev Helmet</div>
                    <div className="WidgetProductsSection__product-price">$150.00</div>
                </li>
            </ul>
        </section>
    );
};

export default WidgetProductsSection;

import React from 'react';
import './FeaturedProductsSection.scss';

function FeaturedProductsSection() {
    return (
        <div className="FeaturedProductsSection">
            <div className="FeaturedProductsSection__top-group">
                <h3 className="FeaturedProductsSection__header">Featured products</h3>
                <ul>
                    <a href="#" className="FeaturedProductsSection__category"><li >On-Road</li></a>
                    <a href="#" className="FeaturedProductsSection__category"><li >X-Road</li></a>
                    <a href="#" className="FeaturedProductsSection__category"><li >Off-Road</li></a>
                    <a href="#" className="FeaturedProductsSection__category"><li >BMX</li></a>
                </ul>
            </div>
            <ul className="FeaturedProductsSection__products">
                <li className="FeaturedProductsSection__product-block">
                    <div className="FeaturedProductsSection__product-content">
                        <div className="FeaturedProductsSection__product-controls">
                            <div className="FeaturedProductsSection__product-control-mask" />
                            <button className="FeaturedProductsSection__product-button">Add to cart</button>
                            <button className="FeaturedProductsSection__product-button">Quick view</button>
                        </div>
                    </div>
                    <div className="FeaturedProductsSection__product-name">Propel Advanced SLO</div>
                    <div className="FeaturedProductsSection__product-price">$900.00</div>
                </li>
                <li className="FeaturedProductsSection__product-block">
                    <div className="FeaturedProductsSection__product-content">
                        <div className="FeaturedProductsSection__product-controls">
                            <div className="FeaturedProductsSection__product-control-mask" />
                            <button className="FeaturedProductsSection__product-button">Add to cart</button>
                            <button className="FeaturedProductsSection__product-button">Quick view</button>
                        </div>
                    </div>
                    <div className="FeaturedProductsSection__product-name">Defy Advanced SL</div>
                    <div className="FeaturedProductsSection__product-price">$1,770.00</div>
                </li>
                <li className="FeaturedProductsSection__product-block">
                    <div className="FeaturedProductsSection__product-content">
                        <div className="FeaturedProductsSection__product-controls">
                            <div className="FeaturedProductsSection__product-control-mask" />
                            <button className="FeaturedProductsSection__product-button">Add to cart</button>
                            <button className="FeaturedProductsSection__product-button">Quick view</button>
                        </div>
                    </div>
                    <div className="FeaturedProductsSection__product-name">Fast Road CO Max</div>
                    <div className="FeaturedProductsSection__product-price">$900.00</div>
                </li>
            </ul>
            <ul className="FeaturedProductsSection__pager">
                <li className="FeaturedProductsSection__pager-button FeaturedProductsSection__pager-button_1" />
                <li className="FeaturedProductsSection__pager-button FeaturedProductsSection__pager-button_2" />
                <li className="FeaturedProductsSection__pager-button FeaturedProductsSection__pager-button_3" />
                <li className="FeaturedProductsSection__pager-button FeaturedProductsSection__pager-button_4" />
                <li className="FeaturedProductsSection__pager-button FeaturedProductsSection__pager-button_5" />
            </ul>
        </div>
    );
};

export default FeaturedProductsSection;
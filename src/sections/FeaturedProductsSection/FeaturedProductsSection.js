
import React from 'react';
import './FeaturedProductsSection.scss';

function FeaturedProductsSection() {
    return (
        <div className="FeaturedProductsSection">
            <div>
                <h3>Featured products</h3>
                <ul className="FeaturedProductsSection__categories">
                    <li>On-Road</li>
                    <li>X-Road</li>
                    <li>Off-Road</li>
                    <li>BMX</li>
                </ul>
            </div>
            <ul>
                <li>
                    <img />
                    <div>Propel Advanced SLO</div>
                    <div>$900.00</div>
                </li>
                <li>
                    <img />
                    <div>Defy Advanced SL</div>
                    <div>$1,770.00</div>
                </li>
                <li>
                    <img />
                    <div>Fast Road CO Max</div>
                    <div>$900.00</div>
                </li>
            </ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
};

export default FeaturedProductsSection;
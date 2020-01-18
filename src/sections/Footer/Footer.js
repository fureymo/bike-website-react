
import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__copyright">Copyright © 2015 <span className="Footer__copyright-red">Magento Themes</span> by TemPlaza. All rights reserved.</div>
            <ul className="Footer__payment-methods">
                <li className="Footer__card Footer__card_visa "/>
                <li className="Footer__card Footer__card_intersection"/>
                <li className="Footer__card Footer__card_ebay"/>
                <li className="Footer__card Footer__card_amazon"/>
                <li className="Footer__card Footer__card_discover"/>
            </ul>
        </footer>

    );
}

export default Footer;
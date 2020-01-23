
import React from 'react';
import './ContactLinkSection.scss';

function ContactLinkSection() {
    return (
        <section className="ContactLinkSection">
            <div className="Contact-info-block">
                <h5 className="Contact-info-block__header">contact info</h5>
                <div className="Contact-info-block__description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                <div className="Contact-info-block__contact-block">
                    <div className="Contact-info-block__label">Address:</div>
                    <div className="Contact-info-block__contact-info">123 Sky Tower address name, Los Algeles, USA, Country, 01234</div>
                </div>
                <div className="Contact-info-block__contact-block">
                    <div className="Contact-info-block__label">Phone:</div>
                    <div className="Contact-info-block__contact-info">(012)345 6789</div>
                </div>
                <div className="Contact-info-block__contact-block">
                    <div className="Contact-info-block__label">Email:</div>
                    <div className="Contact-info-block__contact-info">info@templaza.com</div>
                </div>

                <div  className="Contact-info-block__subscribtion">
                    <form>
                        <input
                            placeholder="Enter your email..."
                            type="email"
                            className="Contact-info-block__subscribtion-input"
                        />
                    </form>
                    <button className="Contact-info-block__subscribtion-button">Subscribe</button>
                </div>
                <ul className="Contact-info-block__social">
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-facebook-f"/>
                    </li></a>
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-twitter"/>
                    </li></a>
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-google-plus-g"/>
                    </li></a>
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-tumblr"/>
                    </li></a>
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-flickr"/>
                    </li></a>
                    <a href="#"><li className="Contact-info-block__social-icon">
                        <i className="fab fa-pinterest-square"/>
                    </li></a>

                </ul>
            </div>
            <div className="Contact-info-block__line"/>
            <div className="Contact-link-block">
                <div className="Contact-link-block__top">
                    <h5 className="Contact-link-block__header-top">what clients say?</h5>
                    <div className="Contact-link-block__feedback-content">
                        <div className="Contact-link-block__avatar"/>
                        <div className="Contact-link-block__description-block">
                            <div className="Contact-link-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</div>
                            <div className="Contact-link-block__name">Kathy Young</div>
                        </div>
                    </div>
                </div>
               <ul className="Contact-link-block__main-list">
                   <li className="Contact-link-block__column">
                       <ul>
                           <h5 className="Contact-link-block__header">how to buy</h5>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Contact Us</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Returns</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Site Map</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Brands</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Gift Vouchers</li></a>
                       </ul>
                   </li>
                   <li className="Contact-link-block__column">
                       <ul>
                           <h5 className="Contact-link-block__header">my account</h5>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">My Account</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Order History</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Wish List</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Newsletter</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Specials</li></a>
                       </ul>
                   </li>
                   <li className="Contact-link-block__column">
                       <ul>
                           <h5 className="Contact-link-block__header">information</h5>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">About Us</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Contact Us</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Term & Conditions</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Privacy Policy</li></a>
                           <a href="#" className="Contact-link-block__link"><li className="Contact-link-block__list-item">Orders and Returns</li></a>
                       </ul>
                   </li>

               </ul>
            </div>
        </section>
    );
};

export default ContactLinkSection;
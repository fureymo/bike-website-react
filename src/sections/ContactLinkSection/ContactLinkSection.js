
import React from 'react';
import './ContactLinkSection.scss';

function ContactLinkSection() {
    return (
        <section className="ContactLinkSection">
            <div className="Contact-info-block">
                <div className="Contact-info-block__contact">
                    <h5 className="Contact-info-block__header">contact info</h5>
                    <div className="Contact-info-block__description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</div>
                    <div className="Contact-info-block">
                        <div className="Contact-info-block">Address:</div>
                        <div className="Contact-info-block">123 Sky Tower address name, Los Algeles,USA, Country, 01234</div>
                    </div>
                    <div className="Contact-info-block__phone-block">
                        <div className="Contact-info-block__phone">Phone:</div>
                        <div className="Contact-info-block__phone-number">(012)345 6789</div>
                    </div>
                    <div className="Contact-info-block__email-block">
                        <div className="Contact-info-block__email">Email:</div>
                        <div className="Contact-info-block__email-address">info@templaza.com</div>
                    </div>
                </div>
                <div  className="Contact-info-block__subscribtion">
                    <form>
                        <input/>
                    </form>
                    <button>Subscribe</button>
                </div>
                <ul className="Contact-info-block__social">
                    <a><li>
                        <i className="fab fa-facebook-f"></i>
                    </li></a>
                    <a><li>
                        <i className="fab fa-twitter"></i>
                    </li></a>
                    <a><li>
                        <i className="fab fa-google-plus-g"></i>
                    </li></a>
                    <a><li>
                        <i className="fab fa-tumblr"></i>
                    </li></a>
                    <a><li>
                        <i className="fab fa-flickr"></i>
                    </li></a>
                    <a><li>
                        <i className="fab fa-pinterest-square"></i>
                    </li></a>

                </ul>
            </div>
            <div className="Contact-link-block">
                <div className="Contact-link-block__feedback-block">
                    <h5 className="Contact-link-block__header-top">what clients say?</h5>
                    <div className="Contact-link-block__feedback-content">
                        <div className="Contact-link-block__avatar">img</div>
                        <div className="Contact-link-block__description_block">
                            <div className="Contact-link-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</div>
                            <div className="Contact-link-block__name">Kathy Young</div>
                        </div>
                    </div>
                </div>
               <ul className="Contact-link-block">
                   <li className="Contact-link-block__column">
                       <ul className="Contact-link-block__how-to-buy-col">
                           <h5 className="Contact-link-block__header">how to buy</h5>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Contact Us</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Returns</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Site Map</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Brands</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Gift Vouchers</li></a>
                       </ul>
                   </li>
                   <li className="Contact-link-block__column">
                       <ul className="Contact-link-block__my-account-col">
                           <h5 className="Contact-link-block__header">my account</h5>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">My Account</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Order History</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Wish List</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Newsletter</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Specials</li></a>
                       </ul>
                   </li>
                   <li className="Contact-link-block__column">
                       <ul className="Contact-link-block__information-col">
                           <h5 className="Contact-link-block__header">information</h5>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">About Us</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Contact Us</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Term & Conditions</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Privacy Policy</li></a>
                           <a className="Contact-link-block-link"><li className="Contact-link-block__list-item">Orders and Returns</li></a>
                       </ul>
                   </li>

               </ul>
            </div>
        </section>
    );
};

export default ContactLinkSection;

import React from 'react';
import './LogoSection.scss';

function LogoSection() {
    return (
        <header className="Header-section">
            <div className="LogoSection">
                <div className="LogoSection__logo">
                    bike sport
                </div>
                <div className="LogoSection__right-params">
                    <select className="LogoSection__category">
                        <option className="LogoSection__category-item">All Category</option>
                        <option className="LogoSection__category-item">Category 1</option>
                        <option className="LogoSection__category-item">Categfory 2</option>
                    </select>
                   <form>
                       <input
                           type="search"
                           placeholder="Search for product"
                           name="search"
                           className="LogoSection__search">
                       </input>
                   </form>
                </div>
            </div>
            <div className="Page-nav-basket-container">
                <div className="Page-nav-basket">
                    <ul  className="Page-nav">
                        <a href="#" className="Page-nav__nav-item"><li>home</li></a>
                        <a href="#" className="Page-nav__nav-item Page-nav__nav-item_onsale"><li>category</li></a>
                        <a href="#" className="Page-nav__nav-item"><li>bikes</li></a>
                        <a href="#" className="Page-nav__nav-item"><li>gear</li></a>
                        <a href="#" className="Page-nav__nav-item Page-nav__nav-item_bestoff"><li>blog</li></a>
                        <a href="#" className="Page-nav__nav-item"><li>about</li></a>
                        <a href="#" className="Page-nav__nav-item"><li>contact</li></a>
                    </ul>
                    <ul className="Basket-section">
                        <li className="Basket-section__favorites">heart</li>
                        <li className="Basket-section__basket">basket</li>
                        <li className="Basket-section__cart">cart</li>
                    </ul>
                </div>
            </div>


        </header>

    );
}

export default LogoSection;

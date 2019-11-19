
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
                       <input type="search" placeholder="Search for product" name="search">
                       </input>
                   </form>
                </div>
            </div>

            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>

    );
}

export default LogoSection;

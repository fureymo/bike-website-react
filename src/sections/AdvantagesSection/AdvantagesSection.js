
import React from 'react';
import './AdvantagesSection.scss';

function AdvantagesSection() {
    return (
        <section  className="AdvantagesSection">
            <div className="AdvantagesSection__item">
                <h5 className="AdvantagesSection__subtitle">free uk delivery</h5>
                <div>International delivery available</div>
            </div>
            <div className="AdvantagesSection__item">
                <h5 className="AdvantagesSection__subtitle">gift cards & wrapping</h5>
                <div>The perfect way to bring a smile</div>
            </div>
            <div className="AdvantagesSection__item">
                <h5 className="AdvantagesSection__subtitle">qualified opticians</h5>
                <div>Prescription Experts</div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
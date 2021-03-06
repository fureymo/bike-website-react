
import React from 'react';
import './AdvantagesSection.scss';
import ShadowDivider from '../../shared/ShadowDivider/ShadowDivider';

class AdvantagesSection extends React.PureComponent {
    render() {
        return (
            <section className="AdvantagesSection-container">
                <div className="AdvantagesSection">
                    <div className="AdvantagesSection__item">
                        <h5 className="AdvantagesSection__subtitle">free uk delivery</h5>
                        <div className="AdvantagesSection__description">International delivery available</div>
                    </div>
                    <div className="AdvantagesSection__item">
                        <h5 className="AdvantagesSection__subtitle">gift cards & wrapping</h5>
                        <div className="AdvantagesSection__description">The perfect way to bring a smile</div>
                    </div>
                    <div className="AdvantagesSection__item">
                        <h5 className="AdvantagesSection__subtitle">qualified opticians</h5>
                        <div className="AdvantagesSection__description">Prescription Experts</div>
                    </div>
                </div>

                <div className="AdvantagesSection__divider-container">
                    <ShadowDivider />
                </div>
            </section>
        );
    }
}

export default AdvantagesSection;


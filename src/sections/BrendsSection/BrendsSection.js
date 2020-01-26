
import React from 'react';
import './BrendsSection.scss';


class BrendsSection extends React.PureComponent {
    render() {
        return (
            <section className="BrendsSection">
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend1"/></a>
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend2"/></a>
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend3"/></a>
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend4"/></a>
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend5"/></a>
                <a href="#"><div className="BrendsSection__brend BrendsSection__brend6"/></a>

            </section>
        );
    }
}

export default BrendsSection;
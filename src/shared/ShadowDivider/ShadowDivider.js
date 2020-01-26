
import React from 'react';
import './ShadowDivider.scss';

class ShadowDivider extends React.PureComponent {
    render() {
        return (
            <div className="ShadowDivider">
                <div className="ShadowDivider__shadow" />
            </div>
        );
    }
}

export default ShadowDivider;
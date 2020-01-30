
import React from 'react';
import './GetintouchSection.scss';

class GetintouchSection extends React.PureComponent {
    render() {
        return (
            <section className="GetintouchSection">
                <h3 className="GetintouchSection__subtitle">get in touch</h3>
                <div className="GetintouchSection__description">
                    Have an idea or a project, lets collaborate and build some awesome stuff
                </div>
                <form>
                    <button className="GetintouchSection__button">buy now</button>
                </form>
            </section>
        );
    }
}

export default GetintouchSection;


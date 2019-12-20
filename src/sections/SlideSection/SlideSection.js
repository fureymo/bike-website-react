
import React from 'react';
import './SlideSection.scss';

function SlideSection() {
    return (
        <section className="SlideSection">
            <a className="SlideSection__arrow" href="#">
                <div className="SlideSection__arrow-border">&lt;</div>
            </a>
            <div className="SlideSection__middle-section">
                <h1 className="SlideSection__subtitle">t<span>h</span>e b<span>i</span>c<span>y</span>c<span>l</span>e</h1>
                <div className="SlideSection__description">Lorem Ipsum is simply dummy text of the printing</div>
                <form >
                    <button className="SlideSection__button">shop now</button>
                </form>
            </div>
            <a className="SlideSection__arrow" href="#">
                <div className="SlideSection__arrow-border">&gt;</div>
            </a>
        </section>
    );
}

export default SlideSection;
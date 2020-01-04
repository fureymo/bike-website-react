
import React from 'react';
import './NewsSection.scss';

function NewsSection() {
    return (
        <section className="NewsSection">
            <div className="NewsSection__header">
                <h3 className="NewsSection__title">from our blog</h3>
                <div className="NewsSection__description">Latest news & event of our bike</div>
            </div>
            <div className="NewsSection__news-block">
                <div className="NewsSection__news-item NewsSection__news-item_first-news">
                    <div className="NewsSection__image"/>
                    <div className="NewsSection__news-information">
                        <a href="#" className="NewsSection__subtitle-link"><h5 className="NewsSection__subtitle">Gulf Today Report On KGS Carnival – 2015</h5></a>
                        <div className="NewsSection__date">Posted at March 19. 2015</div>
                        <div className="NewsSection__news-text">
                            Excellence is never an accident. It is always the result
                            of high intention and intelligent execution; it represents the wise choice of many alternatives.
                        </div>
                        <div className="NewsSection__continue"><a href="#" className="NewsSection__continue-link">Continue Reading</a></div>
                    </div>

                </div>
                <div className="NewsSection__news-item ">
                    <div className="NewsSection__image"/>
                    <div className="NewsSection__news-information">
                        <a href="#" className="NewsSection__subtitle-link"><h5 className="NewsSection__subtitle">Excepteur sint ipsum dolor sit amet conse ctetur</h5></a>
                        <div className="NewsSection__date">Posted at March 19. 2015</div>
                        <div className="NewsSection__news-text">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt .
                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                        </div>
                        <div className="NewsSection__continue"><a href="#" className="NewsSection__continue-link">Continue Reading</a></div>
                    </div>

                </div>
            </div>
            <div className="NewsSection__divider">
                <div className="NewsSection__divider-shadow" />
            </div>

        </section>
    );
};

export default NewsSection;
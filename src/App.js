import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import './reset.scss';

import Header from './sections/Header/Header';
import LogoSection from './sections/LogoSection/LogoSection';
import SlideSection from './sections/SlideSection/SlideSection';
import AdvantagesSection from './sections/AdvantagesSection/AdvantagesSection';
import FeaturedProductsSection from './sections/FeaturedProductsSection/FeaturedProductsSection';
import DealSection from './sections/DealSection/DealSection';
import WidgetProductsSection from './sections/WidgetProductsSection/WidgetProductsSection';
import GetintouchSection from './sections/GetintouchSection/GetintouchSection';
import NewsSection from './sections/NewsSection/NewsSection';



function App() {
  return (
    <div className="App">
      <Header/>
      <LogoSection/>
      <SlideSection/>
      <AdvantagesSection/>
      <FeaturedProductsSection/>
      <DealSection/>
      <WidgetProductsSection/>
      <GetintouchSection/>
      <NewsSection/>
    </div>
  );
}

export default App;

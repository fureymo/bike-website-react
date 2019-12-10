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



function App() {
  return (
    <div className="App">
      <Header/>
      <LogoSection/>
      <SlideSection/>
      <AdvantagesSection/>
      <FeaturedProductsSection/>
      <DealSection/>
    </div>
  );
}

export default App;

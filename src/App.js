import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import './reset.scss';

import Header from './sections/Header/Header';
import LogoSection from './sections/LogoSection/LogoSection';
import SlideSection from './sections/SlideSection/SlideSection';
import AdvantagesSection from './sections/AdvantagesSection/AdvantagesSection';
import FeaturedProductsSection from './sections/FeaturedProductsSection/FeaturedProductsSection';



function App() {
  return (
    <div className="App">
      <Header/>
      <LogoSection/>
      <SlideSection/>
      <AdvantagesSection/>
      <FeaturedProductsSection/>
    </div>
  );
}

export default App;

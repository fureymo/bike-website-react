import React from 'react';
import './App.css';
import './fonts/fonts.scss';
import './reset.scss';

import Header from './sections/Header/Header';
import LogoSection from './sections/LogoSection/LogoSection';
import FeaturedProductsSection from './sections/FeaturedProductsSection/FeaturedProductsSection';
import SlideSection from './sections/SlideSection/SlideSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <LogoSection/>
      <FeaturedProductsSection/>
      <SlideSection/>
    </div>
  );
}

export default App;

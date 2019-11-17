import React from 'react';
import './App.css';
import './fonts/fonts.scss';

import Header from './sections/Header/Header';
import LogoSection from './sections/LogoSection/LogoSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <LogoSection/>
    </div>
  );
}

export default App;

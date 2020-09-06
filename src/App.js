import React from 'react';

import { Navbar } from './components/navigation/navbar.jsx'
import CatDisplay from './components/cat-booth/cat-booth'
import CatGallery from './components/cat-gallery/cat-gallery'

const App = () => {
  return (
    <div className="App">

      <Navbar />

      <CatDisplay />

      <CatGallery />

    </div>
  );
};

export default App;
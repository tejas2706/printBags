import React from 'react';
import './App.css';
import Banners from './Components/Banners';
import DropdownCategories from './Components/DropdownCategories';
import ProductDetails from './Components/ProductDetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <ProductDetails></ProductDetails> */}
    </div>
  );
}

export default App;

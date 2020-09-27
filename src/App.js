import React from 'react';
import './App.css';
import Banners from './Components/Banners';
import DropdownCategories from './Components/DropdownCategories';
import { Maps } from './Components/Maps';
import ProductDetails from './Components/ProductDetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Maps></Maps> */}
    </div>
  );
}

export default App;

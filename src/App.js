import logo from './logo.svg';
import './App.css';
import SearchNav from './components/SearchNav';
import Item from './components/Item';
import Items from './components/Items';
import Search from './pages/Search';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from './pages/ItemPage';




function App() {
 
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path='/article/:id' element={<ItemPage  />} />
        </Routes>
        
      </div>

    </Router>
  );
}

export default App;

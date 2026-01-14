import logo from './logo.svg';
import './App.css';
import SearchNav from './components/SearchNav';
import Item from './components/Item';
import Items from './components/Items';
import Search from './pages/Search';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
        
      </div>

    </Router>
  );
}

export default App;

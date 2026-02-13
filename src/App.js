import './App.css';
import Search from './pages/Search';
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

import logo from './logo.svg';
import './App.css';
import SearchNav from './components/SearchNav';
import Item from './components/Item';
import Items from './components/Items';




function App() {
  return (
    <div className="App">
      <SearchNav />
      <Items />
    </div>
  );
}

export default App;

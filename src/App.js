import logo from './logo.svg';
import './App.css';
import SearchNav from './components/SearchNav';
import Game from './components/Game';
import Games from './components/Games';




function App() {
  return (
    <div className="App">
      <SearchNav />
      <Games/>
    </div>
  );
}

export default App;

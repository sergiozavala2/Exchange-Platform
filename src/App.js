import logo from './assets/img/Bitcoin-Logo.png';
import './App.css';
import Coinbase from './Coinbase';
import CoinAPI from './CoinAPI';
import Difference from './Difference';

function App() {
  return (
    <div className = "App">
      <Coinbase />
      <CoinAPI />
    </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { HeaderNavbar } from './Component/Header/HeaderNavbar';
import { HeaderSearchPanel } from './Component/Header/HeaderSearchPanel';
import Header from './Component/Header/Header';
import Recommend from './Component/Recommend/Recommend';

function App() {
  return (
    <div>
      <div style={{marginBottom:10}}>
        <Header/>
      </div>
      <Recommend/>
    </div>
  );
}

export default App;

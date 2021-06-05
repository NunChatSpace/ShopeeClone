import { Route } from 'react-router';
import './App.css';
import { Header } from './Component/Header/Header';
import Buy from './Component/Page/Buy';
import Home from './Component/Page/Home';
import Login from './Component/Page/Login';
import Register from './Component/Page/Register';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/buy" component={Buy} />
    </div>
  );
}

export default App;

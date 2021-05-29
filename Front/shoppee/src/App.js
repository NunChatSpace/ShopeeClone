import { Route } from 'react-router';
import './App.css';
import Home from './Component/Page/Home';
import Login from './Component/Page/Login';
import Register from './Component/Page/Register';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  );
}

export default App;

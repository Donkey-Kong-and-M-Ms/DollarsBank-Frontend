import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/deposit' component={Deposit} />
          <Route path='/withdraw' component={Withdraw} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

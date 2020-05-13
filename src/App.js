import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

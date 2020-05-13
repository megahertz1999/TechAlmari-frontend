import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Subscription from './layouts/Subscription';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/detail' component={ProductDetail} />
          <Route exact path='/cart' component={ShoppingCart} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
      </BrowserRouter>
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;

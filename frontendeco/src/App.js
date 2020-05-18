import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Registro from './containers/User/Register/Register';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import PurchasingProcess from './containers/PurchasingProcess/PurchasingProcess';
import Results from './containers/Results/Results';
import OrderDetails from './containers/OrderDetails/OrderDetails';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Redirect from="/" to="/home"/>
          <Switch>
            <Route path="/home" component= { Home } exact/>
            <Route path="/login" component= {Login} exact/>
            <Route path="/register" component= {Registro} exact/>
            <Route path="/results/:name" component= { Results } exact/>
            <Route path="/product/:_id" component= { ProductDetail } exact/>
            <Route path="/carrito" component= { PurchasingProcess } exact/>
            <Route path="/orderdetail" component= { OrderDetails } exact/>
            <Route path="/profile" component= { Profile } exact/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

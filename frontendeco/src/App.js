import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

// Import Components
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import RegisterLogin from './containers/RegisterLogin/RegisterLogin';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import PurchasingProcess from './containers/PurchasingProcess/PurchasingProcess';
import Results from './containers/Results/Results';
import OrderDetails from './containers/OrderDetails/OrderDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          {/* <Redirect from="/" to="/home"/> */}
          <Switch>
            <Route path="/home" component= { Home } exact/>
            <Route path="/login" component= {RegisterLogin} exact/>
            <Route path="/results" component= { Results } exact/>
            <Route path="/product/:_id" component= { ProductDetail } exact/>
            {/* <Route path="/carrito" component= { PurchasingProcess } exact/> */}
            <Route path="/orderdetail" component= { OrderDetails } exact/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import ProductDetail from './containers/ProductDetail/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Redirect from="/" to="/home"/>
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/product/:_id" component={ProductDetail} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


import React from 'react';

import {Switch, Route} from 'react-router-dom';

import './App.css';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Header />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;

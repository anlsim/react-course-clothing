
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInPage from './pages/signInPage/sign-in';

function App() {
  return (
    <div>
      <Header/>
     <Switch>
     <Route exact path='/' component={HomePage}/> 
     <Route  path='/shop' component={ShopPage}/> 
     <Route  path='/signin' component={SignInPage}/> 
     </Switch>
    
     
    </div>
  );
}

export default App;

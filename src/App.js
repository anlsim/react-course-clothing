
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';


import './App.css';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInPage from './pages/signInPage/sign-in';
import Checkout from './pages/checkout/checkout';
import {checkUserSession} from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header/>
     <Switch>
     <Route exact path='/' component={HomePage}/> 
     <Route  path='/shop' component={ShopPage}/> 
     <Route  path='/checkout' component={Checkout}/> 
     <Route  exact path='/signin' render={()=> this.props.currentUser ?(<Redirect to='/'/>): (<SignInPage/>)}/> 
     </Switch>
    
     
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser, 
    });


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps )(App);

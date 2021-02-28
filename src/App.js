
import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInPage from './pages/signInPage/sign-in';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
     <Switch>
     <Route exact path='/' component={HomePage}/> 
     <Route  path='/shop' component={ShopPage}/> 
     <Route  path='/signin' component={SignInPage}/> 
     </Switch>
    
     
    </div>
  );
  }
}

export default App;

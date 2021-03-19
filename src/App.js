
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
import {addCollectionAndDocuments, auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCollectionsForPreview} from './redux/shop/shop.selector';
import {setCurrentUser} from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser, collectionsArray} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
        
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() 
          })
             
           
        });
     }
    
       setCurrentUser(userAuth);
       //addCollectionAndDocuments('collections', collectionsArray );
       addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    
    });
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser, 
     collectionsArray: selectCollectionsForPreview(state)
    });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (
  mapStateToProps, mapDispatchToProps )(App);

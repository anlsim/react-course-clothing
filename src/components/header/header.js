import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import {LogoContainer, HeaderContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
      {
          hidden ? null :
           <CartDropDown/>
      }
      
    </OptionsContainer>
    
  </HeaderContainer>
);
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(Header);
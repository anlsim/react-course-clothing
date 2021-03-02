import React from 'react';

import './cart-dropdown.scss';
import CustomBotton from '../custom-button/custom-button';

const CartDropDown = ()=>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomBotton>GO TO CHECKOUT</CustomBotton>
    </div>
);


export default CartDropDown;
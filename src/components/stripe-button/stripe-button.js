import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publisableKey = 'pk_test_51ITFnDIu6Tw4f8Xc041gUyh2zjfJEJl6HxsDO6Au62rQnYYLRQGyGZGb2YpkBoj5hqiirSE7HJO2gveZmug7vWzQ005P7WERD7';

    const onToken = token => { 
        alert('Payment Successful');

    }
    return(
        <StripeCheckout
            label='Pay now'
            name = 'React Clothing Ltd.'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publisableKey}


        />
    );
};

export  default StripeCheckoutButton;
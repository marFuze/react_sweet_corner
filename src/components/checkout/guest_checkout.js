import React from 'react';
import './checkout.scss';

class GuestCheckout extends React.Component {

    handleGuestCheckout(formValues){
        console.log('guest checkout form values:', formValues)

    }

    render () {

    return (
        <div className="guest-checkout">
        <h1 className="center">Guest Checkout</h1>
        </div>
        );
    }
}

export default GuestCheckout;


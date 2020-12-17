import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_qtZWFyD1lOpATVSZ67T1XRtc00Oj7djG0N';
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='FAFA'
      billingAddress
      shippingAddress
      phone
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}.0`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

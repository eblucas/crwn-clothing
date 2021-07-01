import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pulbishableKey =
    "pk_test_51J8W6NKe1b1qUewx6OG0GRbRkScD1Qcn51RllUH8iGg64VUcoG9ByhFp7n4cMR6wzGKagJ08YVwpw94IA1eKKzJg00pHWN6e6p";

  const onToken = (token) => {
    alert("Paymenet sucessful");
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pulbishableKey}
    />
  );
};

export default StripeCheckoutButton;

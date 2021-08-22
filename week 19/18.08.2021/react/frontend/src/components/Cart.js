import React, { useState } from "react";

const Cart = ({ cartItem }) => {
  return (
    <>
      <h1>
        Cart <span className="cart-counter">{cartItem}</span>
        <i className="fas fa-shopping-cart"></i>
      </h1>
    </>
  );
};

export default Cart;

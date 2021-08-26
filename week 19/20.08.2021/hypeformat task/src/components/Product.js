import React, { useRef } from "react";
import Counter from "../Hooks/Counter";

const Product = ({ product, fire, cartItem }) => {
  const price = useRef("");
  return (
    <div onClick={(e) => fire(product, price, Counter)} className="item">
      <img src={product.images[0].src} alt="" />
      <p>{product.categories[0].name}</p>
      <p>{product.name}</p>
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </span>
      <p ref={price}>
        {product.price}.00&euro; - {product.price_html.slice(189, 195)}&euro;
      </p>
    </div>
  );
};

export default Product;

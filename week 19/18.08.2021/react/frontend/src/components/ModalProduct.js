import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Counter from "../Hooks/Counter";
const MySwal = withReactContent(Swal);

const ModalProduct = ({ product, price, setCartItem }) => {
  const [pBOS, setPBOS] = useState("32€");
  return (
    <>
      <img src={product.images[0].src} alt="wow" />
      <div class="swal-scroll-area">
        <h2>{product.name}</h2>
        <h4>
          <strong>{price.current.textContent}</strong>
        </h4>
        <p>{product.yoast_head_json.og_description.slice(0, 30)}</p>
        <p>{product.yoast_head_json.og_description.slice(30)}</p>
      </div>
      <div class="swal-scroll-area">
        <p>Size</p>
        <select onChange={(e) => setPBOS(e.target.value)}>
          <option value="32€" default>
            11.8x11.8 inches (30x30cm)
          </option>
          <option value="40€">15.7x15.7 inches (40x40cm)</option>
          <option value="75€">23.6x23.6 inches (60x60cm)</option>
          <option value="120€">31.5x31.5 inches (80x80cm)</option>
        </select>
      </div>
      <div class="swal-add-to-cart">
        <h2>{pBOS}</h2>
        <Counter
          cartCount={1}
          priceBasedOnSize={pBOS}
          setCartItem={setCartItem}
        />
      </div>
    </>
  );
};

export default ModalProduct;

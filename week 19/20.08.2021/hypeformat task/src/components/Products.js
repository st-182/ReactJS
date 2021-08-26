import React, { useEffect, useState } from "react";
import Product from "./Product";
import NyanCat from "../images/nyanCat.gif";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cart from "./Cart";
import ModalProduct from "./ModalProduct";
const MySwal = withReactContent(Swal);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    fetch(
      `https://hypeformat.com/wp-json/wc/v3/products?category=29?per_page=20&consumer_key=ck_b1787d23e087fc4487013614991d3f989cfbcea0&consumer_secret=cs_7b76f2ecc8e2c66bcf53bc697f44062bd7d9cea6`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const fire = (product, price, cartItem) => {
    console.log(price);
    MySwal.fire({
      html: (
        <ModalProduct
          price={price}
          product={product}
          setCartItem={setCartItem}
        />
      ),
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
  return (
    <>
      <div className="cart">
        <h1>Best Sellers</h1>
        <Cart cartItem={cartItem} />
      </div>

      {products.length === 0 ? (
        <div>
          <img id="nyan-cat" src={NyanCat} alt="" />
        </div>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <Product product={product} fire={fire} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;

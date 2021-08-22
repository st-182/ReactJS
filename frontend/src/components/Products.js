import React from "react";

const Products = ({ product, deleteProduct }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button className="button" onClick={() => deleteProduct(product.id)}>
        Delete this product, so BMW would be clean
      </button>
    </div>
  );
};

export default Products;

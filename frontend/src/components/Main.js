import React, { useEffect, useState } from "react";
import Products from "./Products";
import User from "./User";

const Main = () => {
  //Hooks
  //-useState
  const [users, setUsers] = useState([]);
  let [products, setProducts] = useState([]);
  //-useEffect
  useEffect(() => {
    document.title = `Github Users!`;
    fetch(`https://api.github.com/users/st-182/following`)
      .then((response) => response.json())
      .then((following) => {
        setUsers(following);
        console.log(users);
      });
    fetch(`https://golden-whispering-show.glitch.me/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  //Custom function
  const deleteThis = (id) => {
    fetch(`https://golden-whispering-show.glitch.me/${id}`, {
      method: `Delete`,
      headers: {
        "Content-Type": `application/json`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          products = products.filter((product) => product.id !== id);
          console.log(products);
          setProducts(products);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      {users.length === 0 || products.length === 0 ? (
        <>
          <h1>Loading!</h1>
          <div className="grid">
            {users.map((user) => (
              <User user={user} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>I am following these users on github!</h1>
          <div className="grid">
            {users.map((user) => (
              <User user={user} />
            ))}
          </div>
          <h1>I am eating these products in BMW!</h1>
          <div className="grid">
            {console.log(products)}
            {products.map((product) => (
              <Products product={product} deleteProduct={deleteThis} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Main;

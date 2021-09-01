import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [cars, setCars] = useState([]);
  //additional fuctions
  const fetchData = async () => {
    let res = await axios.get("http://localhost:5000/api/cars");
    let data = await res.data;
    setCars([...data]);
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  return (
    <main>
      {cars ? cars.map((item) => <div>{item.cars[0].year}</div>) : ""}
    </main>
  );
};

export default HomeScreen;

import React, { useEffect } from "react";

const ServicesScreen = () => {
  useEffect(() => {
    document.title = "React: Services";
  }, []);
  return (
    <section>
      <h1>Services</h1>
    </section>
  );
};

export default ServicesScreen;

import React, { useEffect } from "react";

const WorksScreen = () => {
  useEffect(() => {
    document.title = "React: Works";
  }, []);
  return (
    <section>
      <h1>Works</h1>
    </section>
  );
};

export default WorksScreen;

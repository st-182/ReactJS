import React, { useEffect, useState } from "react";
import axios from "axios";
const FuncCounter = () => {
  const [toDos, setToDos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((data) =>
      setToDos(data.data)
    );
    console.log(`axios`);

    return () => {};
  }, []);

  return (
    <>
      <div>
        <h1>How Many Todos?</h1>
        <p>{count}</p>
        <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
          -
        </button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        {toDos.length > 0
          ? toDos.slice(0, count).map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default FuncCounter;

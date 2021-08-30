import React, { useContext, useEffect } from "react";
import { APIinContext } from "../../screens/HomeScreen";

const Output = () => {
  const effect = useContext(APIinContext);
  const { API_State } = effect;
  //   useEffect(() => {
  //     return () => {};
  //   }, [API_State]);
  console.log(API_State);
  return (
    <div>
      {API_State.data.length > 0 ? (
        API_State.data.slice(0, API_State.items).map((item) => (
          <div key={item.id}>
            {console.log(item.id)}
            {item.name && <p>{item.name}</p>}
            {item.title && <p>{item.title}</p>}
            {item.email && <p>{item.email}</p>}
            {item.body && <p>{item.body}</p>}
            {item.completed && <p>{item.completed}</p>}
          </div>
        ))
      ) : (
        <h1>No data</h1>
        // <img
        //   src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340"
        //   alt="One"
        // />
      )}
    </div>
  );
};

export default Output;

import React, { useEffect, useState } from "react";

function Effect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Hook");

    const timeout = setTimeout(() => {
      console.log(count);
    }, 2000);

    // cleanup function
    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Effect1;

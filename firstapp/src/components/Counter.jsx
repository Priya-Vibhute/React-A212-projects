import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Value of count is {count}</p>
      <button type="button" class="btn btn-primary" onClick={increment}>
        Increment
      </button>

      <button type="button" class="btn btn-primary" onClick={decrement}>
        Decrement
      </button>

      <hr />

      {word && <h4>Word is {word}</h4>}
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setWord(word + "Hello")}
      >
        Button
      </button>
    </div>
  );
}

export default Counter;

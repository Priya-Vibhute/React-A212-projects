import React, { useState } from "react";

function ShortCircuit() {
  const [word, setWord] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const switchLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      {/* If true then gives output */}
      {word && <h1>Word has value {word}</h1>}
      <hr />
      {/* If false then gives output */}
      {loggedIn || <h1>You are logged out -OR</h1>}
      <hr />
      <hr />

      <h1>{loggedIn ? "You are logged in " : "You are logged Out"}</h1>

      <hr />

      {loggedIn ? <>logout</> : <>Register & login</>}

      <button type="button" class="btn btn-danger" onClick={switchLogin}>
        Login
      </button>
    </div>
  );
}

export default ShortCircuit;

import React, { useContext } from "react";
import { userContext } from "./A";

function D() {
  const { msg ,name} = useContext(userContext);
  return (
    <div>
      <p>D component {msg} {name} </p>
    </div>
  );
}

export default D;

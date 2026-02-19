import React, { useContext } from "react";
import D from "./D";
import { userContext } from "./A";

function C() {

 const {msg,name}= useContext(userContext)
  return (
    <div>
      <p>C component  {msg}</p>
      <D/>
    </div>
  );
}

export default C;

import React, { useState } from "react";
import B from "./B";

function A() {
  const [msg, setMsg] = useState("Bye Bye");

  return (
    <div>
      <p>A component</p>
      <B/>
    </div>
  );
}

export default A;

import React, { createContext, useState } from "react";
import B from "./B";


export const userContext=createContext()

function A() {
  const [msg, setMsg] = useState("Bye Bye");

  return (
    <div>
      <p>A component</p>
      <userContext.Provider value={{msg,name:"Nisha"}}>
        <B />
      </userContext.Provider>
    </div>
  );
}

export default A;

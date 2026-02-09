import React from "react";

function School({ id, name, address }) {
  return (
    <div>
      <p>School id is {id}</p>
      <p>School name :{name}</p>
      <p>School Address :{address}</p>
    </div>
  );
}

export default School;

import React, { useState } from "react";

function FormHandling2() {
  // Controlled component

  const [name, setName] = useState("Nisha");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted " + name);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type="submit" />
      </form>

      <h1>{name}</h1>
    </div>
  );
}

export default FormHandling2;

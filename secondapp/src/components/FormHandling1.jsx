import React, { useRef } from "react";

function FormHandling1() {
  // Uncontrolled Component

  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
    inputRef.current.value=""
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormHandling1;

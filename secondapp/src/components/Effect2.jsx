import React, { useEffect, useState } from "react";

function Effect2() {
  const [quotes, setQuotes] = useState(null);
 
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.log(error));
  }, []);

  return <div>{quotes && quotes.map((q) => <h1>{q.quote}</h1>)}</div>;
}

export default Effect2;

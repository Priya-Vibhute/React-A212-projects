import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/"} className="">Home</Link>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/contact"}>Contact us</Link>

      
    </div>
  );
}

export default Home;

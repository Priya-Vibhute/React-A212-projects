import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link
        name=""
        id=""
        class="btn btn-primary"
        href="#"
        role="button"
        to={"/use-effect-1"}
      >
        Effect 1
      </Link>

      <Link
        name=""
        id=""
        class="btn btn-primary"
        href="#"
        role="button"
        to={"/use-effect-2"}
      >
        Effect 2
      </Link>
    </div>
  );
}

export default Home;

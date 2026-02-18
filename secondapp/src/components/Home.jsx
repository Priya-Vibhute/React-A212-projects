import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/use-effect-1"}
      >
        Effect 1
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/use-effect-2"}
      >
        Effect 2
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/recipes"}
      >
        Recipes
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/products"}
      >
        Products
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/form-handling-1"}
      >
        Form Handling 1
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/form-handling-2"}
      >
        Form Handling 2
      </Link>

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/form-handling-3"}
      >
        Form Handling 3
      </Link>

      {/* context-example */}

      <br />

      <Link
        name=""
        id=""
        class="btn btn-primary mb-3"
        href="#"
        role="button"
        to={"/context-example"}
      >
        Context
      </Link>
    </div>
  );
}

export default Home;

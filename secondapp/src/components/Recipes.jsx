import React, { useEffect, useState } from "react";

function Recipes() {
  const [recipe, setRecipes] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="mx-3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" class="btn btn-primary">
        Button
      </button>

      <h1>{search.toLowerCase()}</h1>

      <hr />

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {recipe &&
          recipe
            .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
            .map((r) => (
              <div class="col" key={r.id}>
                <div class="card">
                  <img src={r.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{r.name}</h5>
                    <ul>
                      {r.ingredients.map((i) => (
                        <li>{i}</li>
                      ))}
                    </ul>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Recipes;

import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {products &&
          products.map((p) => (
            <div class="col">
              <div class="card">
                <img src={p.images} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{p.title}</h5>
                  <p class="card-text">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;

import { useState } from "react";

export function Product() {
  const products = [
    { id: 101, name: "Laptop", price: 45000 },
    { id: 102, name: "Mobile phone", price: 35000 },
    { id: 103, name: "Earphones", price: 500 },
  ];

  const [productList, setProductList] = useState(products);
  return (
    <>
      <div className="row">
        {productList.map((p) => (
          <div className="col bg-warning m-4 p-4">
            <p>Id :{p.id}</p>
            <p>Name {p.name}</p>
            <p>Price {p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

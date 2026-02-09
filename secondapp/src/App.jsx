import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Effect1 from "./components/Effect1";
import Effect2 from "./components/Effect2";
import Products from "./components/Products";
import Recipes from "./components/Recipes";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "use-effect-1",
    element: <Effect1 />,
  },
  {
    path: "use-effect-2",
    element: <Effect2 />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "recipes",
    element: <Recipes />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

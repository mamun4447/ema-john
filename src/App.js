// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";
import { productsAndCartLoader } from "./loader/ProductsCardLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "shop",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "order",
          loader: productsAndCartLoader,
          element: <Order />,
        },
        {
          path: "inventory",
          loader: () => fetch("products.json"),
          element: <Inventory />,
        },
      ],
    },
    {
      path: "*",
      element: <div>Oops! There is an error!</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

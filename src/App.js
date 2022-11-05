// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import LogIn from "./components/LogIn/LogIn";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
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
          element: <Shop />,
        },
        {
          path: "shop",
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
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order/Order";
import { ProductAndCartLoader } from "./components/loaders/ProductAndCartLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: ProductAndCartLoader,
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        loader: ProductAndCartLoader,
        element: <Order></Order>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

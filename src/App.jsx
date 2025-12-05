import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Products from "./views/Products";
import ProductDetail from "./views/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl">404 - Page Not Found 🥲</h1>
    </div>
    ),
    children: [
      { path: "/",element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

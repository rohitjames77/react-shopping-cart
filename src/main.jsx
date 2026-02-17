import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./Header/Header.jsx";
import ContentPage from "./Content/Content.jsx";
import Carousel from "./Content/Carousel.jsx";
import App from "./App.jsx";
import Products from "./products/Products.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import CartCheckoutDelivery from "./Cart/CartCheckoutDelivery.jsx";
import ErrorPage from "./Content/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/content/home" replace />,
  },

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "content",
        element: <ContentPage />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "cart",
            element: <CartCheckoutDelivery />,
          },
          {
            path: "/content/home",
            element: <Carousel />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

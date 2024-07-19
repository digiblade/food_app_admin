import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Error404Page from "./Components/Pages/error404-page";
import PRestaurantManagement from "./Components/Pages/p-restaurant-management";

export default function RouteManager() {
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: (
          <PRestaurantManagement />
      ),
      errorElement: <Error404Page />,
    },
    {
      path: "/restaurant",
      element: (
          <PRestaurantManagement />
      ),
      errorElement: <Error404Page />,
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

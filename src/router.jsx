import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Error404Page from "./Components/Pages/error404-page";
import LoginPage from "./Components/Pages/login-page";
import ProtectedRoute from "./protected-route";
import DashboardPage from "./Components/Pages/dashboard-page";
import BookingsPage from "./Components/Pages/bookings-page";
import DriverPage from "./Components/Pages/drivers-page";
import VehiclesPage from "./Components/Pages/vehicles-page";

export default function RouteManager() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
      errorElement: <Error404Page />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
      errorElement: <Error404Page />,
    },
    {
      path: "/bookings",
      element: (
        <ProtectedRoute>
          <BookingsPage />
        </ProtectedRoute>
      ),
      errorElement: <Error404Page />,
    },
    {
      path: "/drivers",
      element: (
        <ProtectedRoute>
          <DriverPage />
        </ProtectedRoute>
      ),
      errorElement: <Error404Page />,
    },
    {
      path: "/vehicles",
      element: (
        <ProtectedRoute>
          <VehiclesPage />
        </ProtectedRoute>
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

/*import React from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";

import { createBrowserRouter, RouterProvider } from "react-router";
import Notfound from "./components/Notfound";
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;*/

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
// Import the NotFound component
import RootLayout from "./components/layout/RootLayout";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import AuthLayout from "./components/layout/AuthLayout";
import Profile from "./pages/Profile";
import ForgotPassword from"./pages/Forgortpassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import { Component } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
      },
      {
        path: "/events/edit",
        element: <NewEvent />,
      },
      {
        path: "/events/:id", //id less user experience  and slug improves user experience
        element: <EventDetail />,
      },
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path:"/profile",
        element:<Profile/>
      },
      { path:"/forgot-password",
        element:<ForgotPassword/>
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />, // You can create a NotFound component for handling 404 errors
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

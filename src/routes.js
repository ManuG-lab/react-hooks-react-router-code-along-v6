import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/user-profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />,
    },
]

export default routes;
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./components/Login"
import Header from "./components/Header"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App

import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout.js"
import Home from "../pages/Home.js"
import NotFound from "../pages/NotFound.js"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

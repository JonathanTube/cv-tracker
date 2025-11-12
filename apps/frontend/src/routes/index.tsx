import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout.js"
import Home from "../pages/Home.js"
import Applications from "../pages/Applications.js"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/applications", element: <Applications /> },
    ],
  },
])

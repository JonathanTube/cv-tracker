import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout.js"
import Home from "../pages/Home.js"
import Applications from "../pages/Applications.js"
import Management from "../pages/Management.js"
import NotFound from "../pages/NotFound.js"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/applications", element: <Applications /> },
      { path: "/management", element: <Management /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

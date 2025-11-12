import { Outlet } from "react-router-dom"
import Header from "../components/Header.js"

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  )
}

export default Layout

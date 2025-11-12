import Logo from "./Logo.js"
import Nav from "./Nav.js"

export default function Header() {
  return (
    <nav className="container mx-auto flex justify-between py-2">
      <Logo />
      <Nav />
    </nav>
  )
}

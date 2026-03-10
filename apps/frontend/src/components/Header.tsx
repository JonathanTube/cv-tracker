import Logo from "./Logo.js"
import Nav from "./Nav.js"

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {/* <Nav /> */}
      </div>
    </header>
  )
}

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const menus: Array<{
  label: string,
  path: string
}> = [{
  label: "Home",
  path: "/"
}, {
  label: "About",
  path: "/about"
}, {
  label: "Applications",
  path: "/applications"
}, {
  label: "Management",
  path: "/management"
}]

export default function Nav() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()

  const handleClick = (index: number) => {
    setCurrent(index)
    const menu = menus[index]
    if (menu) {
      navigate(menu.path)
    }
  }

  return (
    <ul className="flex space-x-5 cursor-pointer">
      {menus.map((menu, index) =>
        current == index ? (
          <li className="rounded bg-lime-400 px-2 py-1" key={menu.path}>
            {menu.label}
          </li>
        ) : (
          <li
            className="rounded px-2 py-1"
            key={menu.path}
            onClick={() => handleClick(index)}>
            {menu.label}
          </li>
        )
      )}
    </ul>
  )
}

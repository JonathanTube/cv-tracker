import { useState } from "react"

const menus = ["Home", "About", "Contact"]

export default function Nav() {
  const [current, setCurrent] = useState(0)

  return (
    <ul className="flex space-x-5 cursor-pointer">
      {menus.map((menu, index) =>
        current == index ? (
          <li className="rounded bg-lime-400 px-2 py-1" key={menu}>
            {menu}
          </li>
        ) : (
          <li
            className="rounded px-2 py-1"
            key={menu}
            onClick={() => setCurrent(index)}>
            {menu}
          </li>
        )
      )}
    </ul>
  )
}

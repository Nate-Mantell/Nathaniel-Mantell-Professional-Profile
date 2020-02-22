import React from "react"
import { Link } from "gatsby"

import "./menu.css"

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu

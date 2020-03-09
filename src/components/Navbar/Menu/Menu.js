// @flow strict
import React from "react"
import { Link } from "gatsby"
import styles from "./Menu.module.scss"

const Menu = ({ menu }) => (
  <nav className={styles["menu"]}>
    <ul className={styles["menu__list"]}>
      {menu.map(item => (
        <li className={styles["menu__list__item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list__item__link"]}
            activeClassName={styles["menu__list__item__link__active"]}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu

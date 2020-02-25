// @flow strict
import React from "react"
import Author from "./Author"
import Contacts from "./Contacts"
import Copyright from "./Copyright"
import Menu from "./Menu"
import styles from "./Navbar.module.scss"
import { useSiteMetadata } from "../../hooks"

const Navbar = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata()

  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__inner"]}>
        <div className={styles["navbar__inner__content"]}>
          <Author author={author} isIndex={isIndex} />
          <Menu menu={menu} />
          <Contacts contacts={author.contacts} />
          <Copyright copyright={copyright} />
        </div>
      </div>
    </div>
  )
}

export default Navbar

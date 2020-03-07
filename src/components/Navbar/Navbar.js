// @flow strict
import React, { Fragment } from "react"
import Author from "./Author"
import Contacts from "./Contacts"
import Copyright from "./Copyright"
import Menu from "./Menu"
import {
  HamburgerMenu,
  HamburgerMenuItem,
  HamburgerMenuButton,
} from "./HamburgerMenu"
import styles from "./Navbar.module.scss"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLinkClick() {
    this.setState({ menuOpen: false })
  }

  render() {
    /*const dynamicStyles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "black",
        width: "100%",
        color: "white",
        fontFamily: "Lobster",
      },
      logo: {
        margin: "0 auto",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    }*/
    const bmenu = ["About", "Blog", "Portfolio", "Contact"]
    const menuItems = bmenu.map((val, index) => {
      return (
        <HamburgerMenuItem
          key={index}
          open={this.state.menuOpen}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick()
          }}
        >
          {val}
        </HamburgerMenuItem>
      )
    })

    const { author, copyright, menu } = this.props.siteMetadata

    return (
      <Fragment>
        <div className={styles["sidenavbar"]}>
          <div className={styles["sidenavbar__inner"]}>
            <div className={styles["sidenavbar__inner__content"]}>
              <Author author={author} isIndex={false} />
              <Menu menu={menu} />
              <Contacts contacts={author.contacts} />
              <Copyright copyright={copyright} />
            </div>
          </div>
        </div>
        <div
          className={styles["burgermenu_container"]}
          id="BurgerMenuResponsiveContainer"
        >
          <HamburgerMenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <div className={styles["logo_mobile"]} id="BurgerMenuLogo">
            <h1>{author.name}</h1>
          </div>
        </div>
        <HamburgerMenu open={this.state.menuOpen}>{menuItems}</HamburgerMenu>
      </Fragment>
    )
  }
}

export default Navbar

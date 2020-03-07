import React from "react"
import styles from "./HamburgerMenu.module.scss"

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  //componentWillReceiveProps(nextProps) {
  //  if (nextProps.open !== this.state.open) {
  //    this.setState({ open: nextProps.open })
  //  }
  //}

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return { open: nextProps.open }
    } else return null
  }

  /*componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      styles["container.height"] = this.state.open ? "100%" : 0
    }
  }*/

  render() {
    /*const dynamicStyles = {
      container: {
        height: this.state.open ? "100%" : 0,
        transition: "height 0.3s ease",
      },
      menuList: {
        paddingTop: "3rem",
      },
    }*/
    return (
      <div
        className={
          this.state.open
            ? styles["container_open"]
            : styles["container_closed"]
        }
        id="BurgerMenu"
      >
        {this.state.open ? (
          <div className={styles["menuList"]} id="BurgerMenuList">
            {this.props.children}
          </div>
        ) : null}
      </div>
    )
  }
}

export default HamburgerMenu

import React from "react"
import styles from "./HamburgerMenuItem.module.scss"

class HamburgerMenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const dynamicStyles = {
      container: {
        animationDelay: this.props.delay,
      },
      menuItem: {
        animationDelay: this.props.delay,
      },
      line: {
        animationDelay: this.props.delay,
      },
    }
    return (
      <div className={styles["container"]}>
        <div
          role="link"
          className={styles["menuItem"]}
          onMouseEnter={() => {
            this.handleHover()
          }}
          onMouseLeave={() => {
            this.handleHover()
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default HamburgerMenuItem

// @flow strict
import React from "react"
import styles from "./Content.module.scss"

const Content = ({ children }) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["content__inner"]}>{children}</div>
    </div>
  )
}

export default Content

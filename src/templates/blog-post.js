import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import styles from "./blog-post.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1 className={styles["post__title"]}>{frontmatter.title}</h1>
        <h4 className={styles["post__info"]}>
          Posted by{" "}
          <span className={styles["post__info__important"]}>
            {frontmatter.author}
          </span>{" "}
          on{" "}
          <span className={styles["post__info__important"]}>
            {frontmatter.date}
          </span>
        </h4>
        <div
          className={styles["post__body"]}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`

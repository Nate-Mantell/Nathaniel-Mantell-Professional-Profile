import React from "react"
import { graphql } from "gatsby"
import { Link, navigate } from "gatsby"

import Layout from "../components/Layout"

import styles from "./blog.module.scss"

const handleLinkClick = path => {
  navigate(path)
}

const Blog = ({ data }) => (
  <Layout
    title="Blog"
    description="Articles about web software development"
    socialImage="photo.jpg"
  >
    <div className={styles["container"]}>
      <h1>Latest Posts</h1>
      <div className={styles["post_list"]} id="blogPostList">
        {data.allMarkdownRemark.edges.map(post => (
          <div
            key={post.node.id}
            role="link"
            className={styles["post_summary"]}
            onClick={() => handleLinkClick(post.node.frontmatter.path)}
          >
            <h3 className={styles["post_summary__title"]}>
              {post.node.frontmatter.title}
            </h3>
            <small className={styles["post_summary__info"]}>
              Posted by{" "}
              <span className={styles["post_summary__info__important"]}>
                {post.node.frontmatter.author}
              </span>{" "}
              on{" "}
              <span className={styles["post_summary__info__important"]}>
                {post.node.frontmatter.date}
              </span>
            </small>
            <p>{post.node.excerpt}</p>
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <div className={styles["post_summary_separator"]}></div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

export default Blog

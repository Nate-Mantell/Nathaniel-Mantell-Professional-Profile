import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import styles from "./blog.module.scss"

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
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
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
            date
            path
            title
          }
        }
      }
    }
  }
`

export default Blog

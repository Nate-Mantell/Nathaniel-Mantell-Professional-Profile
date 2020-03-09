import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h4>
          Posted by {frontmatter.author} on {frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
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

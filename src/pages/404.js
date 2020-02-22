import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>Sorry, this page doesn&#39;t exist!</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default NotFoundPage

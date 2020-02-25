import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout
    title="About"
    description="Nathaniel Mantell is a web software developer"
    socialImage="photo.jpg"
  >
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/portfolio/">Portfolio</Link>
  </Layout>
)

export default IndexPage

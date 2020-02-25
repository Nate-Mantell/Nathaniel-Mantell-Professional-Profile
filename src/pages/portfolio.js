import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const Portfolio = () => (
  <Layout
    title="Portfolio"
    description="Portfolio of my works"
    socialImage="photo.jpg"
  >
    <h1>Hi from the portfolio</h1>
    <p>Welcome to my portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio

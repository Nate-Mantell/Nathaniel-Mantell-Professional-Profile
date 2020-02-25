import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout
    title="404 Page Not Found"
    description="This page doesn&#39;t exist"
    socialImage="photo.jpg"
  >
    <h1>PAGE NOT FOUND</h1>
    <p>Sorry, this page doesn&#39;t exist!</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default NotFoundPage

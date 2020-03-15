import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/Layout"

import styles from "./portfolio.module.scss"

const Portfolio = () => (
  <Layout
    title="Portfolio"
    description="Portfolio of my works"
    socialImage="photo.jpg"
  >
    <div>
      <h1>Portfolio</h1>
      <h2>Gypsy Housing</h2>
      <h4>Web Application</h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`GypsyHousing1.jpg`)}
          alt="Gypsy Housing example 1"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`GypsyHousing2.jpg`)}
          alt="Gypsy Housing example 2"
        />
      </div>
      <h2>YouMap</h2>
      <h4>iPhone App</h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`YouMap1.jpg`)}
          alt="YouMap example 1"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`YouMap2.jpg`)}
          alt="YouMap example 2"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`YouMap3.jpg`)}
          alt="YouMap example 3"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`YouMap4.jpg`)}
          alt="YouMap example 4"
        />
      </div>
      <h2>On The Hudson</h2>
      <h4>iPhone App</h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`OnTheHudson1.jpg`)}
          alt="On The Hudson example 1"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`OnTheHudson2.jpg`)}
          alt="On The Hudson example 2"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`OnTheHudson3.jpg`)}
          alt="On The Hudson example 3"
        />
        <img
          className={styles["gallery__image"]}
          src={withPrefix(`OnTheHudson4.jpg`)}
          alt="On The Hudson example 4"
        />
      </div>
      <h2>Social Media Link</h2>
      <h4>
        Web Application -{" "}
        <a
          href="https://socialmedialink.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit Social Media Link Website
        </a>
      </h4>

      <br />

      <h2>NathanielMantell.com</h2>
      <h4>Website</h4>
      <p>This website was developed from scratch using GatsbyJS</p>

      <br />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

/*
export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "gypsyhousing" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
*/

export default Portfolio

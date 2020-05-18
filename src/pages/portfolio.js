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
      <h2>Wordpress Examples</h2>
      <h4>
        E-Commerce Demo -{" "}
        <a
          href="http://digital.mantellsolutions.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          digital.mantellsolutions.com
        </a>
      </h4>
      <h4>
        Medical Office Site Demo -{" "}
        <a
          href="http://medical.mantellsolutions.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          medical.mantellsolutions.com
        </a>
      </h4>
      <h4>
        Restaurant Demo -{" "}
        <a
          href="http://restaurant.mantellsolutions.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          restaurant.mantellsolutions.com
        </a>
      </h4>
      <h4>
        Membership and Custom Plugin Demo -{" "}
        <a
          href="http://member.mantellsolutions.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          member.mantellsolutions.com
        </a>
      </h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`e-commerce-demo.jpg`)}
          alt="E-Commerce Wordpress example"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Medical-Site-Wordpress-1.jpg`)}
          alt="Medical Site Wordpress example 1"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Medical-Site-Wordpress-2.jpg`)}
          alt="Medical Site Wordpress example 2"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`restaurant-demo.jpg`)}
          alt="Restaurant Site Wordpress example"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`member-demo.jpg`)}
          alt="Member Site Wordpress example"
        />
      </div>

      <h2>The GetRight Spot</h2>
      <h4>
        Wordpress Site -{" "}
        <a
          href="https://thegetrightspot.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          thegetrightspot.com
        </a>
      </h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`thegetrightspot-home-1.jpg`)}
          alt="The GetRight Spot"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`thegetrightspot-home-3.jpg`)}
          alt="The GetRight Spot"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`thegetrightspot-home-4.jpg`)}
          alt="The GetRight Spot"
        />
      </div>

      <h2>Casey's On Rosewood</h2>
      <h4>
        Wordpress Site -{" "}
        <a
          href="https://caseysgarden.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          caseysgarden.com
        </a>
      </h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`caseys-garden.jpg`)}
          alt="Casey's On Rosewood Online Store"
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
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Vesta-Platform-1.png`)}
          alt="SML Vesta Platform example 1"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Vesta-Platform-2.png`)}
          alt="SML Vesta Platform example 2"
        />
      </div>
      <h2>Smiley360 Blog</h2>
      <h4>
        Wordpress Site -{" "}
        <a
          href="https://blog.smiley360.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit Smiley360 Blog
        </a>
      </h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Smiley360-Wordpress-Blog-1.jpg`)}
          alt="Smiley360 Wordpress example 1"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Smiley360-Wordpress-Blog-2.jpg`)}
          alt="Smiley360 Wordpress example 2"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Smiley360-Wordpress-Blog-3.jpg`)}
          alt="Smiley360 Wordpress Blog example 3"
        />
      </div>
      <h2>Medical Site Example</h2>
      <h4>
        Wordpress Site -{" "}
        <a
          href="http://medical.mantellsolutions.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit the site
        </a>
      </h4>
      <div className={styles["gallery"]}>
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Medical-Site-Wordpress-1.jpg`)}
          alt="Medical Site Wordpress example 1"
        />
        <img
          className={styles["gallery__image"]}
          width="80%"
          src={withPrefix(`Medical-Site-Wordpress-2.jpg`)}
          alt="Medical Site Wordpress example 2"
        />
      </div>

      <br />

      <h2>NathanielMantell.com</h2>
      <h4>Website</h4>
      <p>
        This website was developed using GatsbyJS
        <br />
        <a
          href="https://github.com/Nate-Mantell/Nathaniel-Mantell-Professional-Profile"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Github
        </a>
      </p>

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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import styles from "./index.module.scss"

const IndexPage = () => (
  <Layout
    title="About"
    description="Nathaniel Mantell is a web software developer"
    socialImage="photo.jpg"
  >
    <div className={styles["container"]}>
      <h1 className={styles["name"]}>
        Nathaniel <span className={styles["name__last"]}>Mantell</span>
      </h1>
      <div className={styles["line"]}></div>
      <h2 className={styles["title"]}>
        Software Product Manager and Web Developer
      </h2>
      <p>
        I am a software product manager and web developer with 7+ years of
        experience developing and delivering software products for web and
        mobile applications.
      </p>
      <p>
        My primary expertise is in managing products by crafting roadmaps, user
        stories, wireframes, mockups and prototypes.
      </p>
      <p>
        I have long term experience managing product backlogs and development
        teams, with the technical experience necessary to work effectively with
        cross-functional developers both on-shore and off-shore.
      </p>
      <p>
        I possess full cycle proficiency across strategy/discovery, UX, design,
        dev, QA and production line management.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>
          Jira, Aha!, Pivotal Tracker, Basecamp, Github Project Management,
          Teamwork, Dropbox, Eventum, Redmine, Desk
        </li>
        <li>
          InVision, Figma, Lucidchart, Balsamiq, MS Visio, Google Docs,
          Photoshop, Acrobat
        </li>
        <li>
          Slack, Skype, Zoom, GoToMeeting, Join.Me, MaxFocus, WebEx, Uber
          Conferencing, Google Hangouts
        </li>
        <li>
          Vertical Response, Mailchimp, Google Apps, Constant Contact, Zoho,
          Monday, Outlook, Thunderbird
        </li>
        <li>
          AWS, DataDog, NewRelic, Rollbar, LogEntries, Clickmeter,
          GoogleAnalytics, Bitly
        </li>
        <li>Python, SQL, Django, Java, PHP, Unity, C#, C++, Github</li>
        <li>
          WordPress, React, Redux, Gatsby, JavaScript, jQuery, HTML, CSS, CSS
          Grid, SASS, SCSS, LESS, Reactstrap, Bootstrap
        </li>
        <li>
          Selenium, JMeter, Element, Gherkin, TestRail, BlazeMeter, flood.io,
          UML, ERD
        </li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>
          <b>Gypsy Housing LLC, New York, NY</b> - Oct 2018 – April 2019
          <p>
            Agile Product Owner - Manage new web application product from
            inception to deployment
          </p>
        </li>
        <li>
          <b>YouMap Inc, New York, NY</b> - Apr 2018 – Aug 2018{" "}
          <p>
            Agile Product Owner / Agile Process Specialist - Manage product and
            assist the team towards Agile Scrum transition
          </p>
        </li>
        <li>
          <b>Social Media Link, New York, NY</b> - Sept 2013 – Jan 2017{" "}
          <p>
            Director of Software Development - Manage all aspects of software
            development and office IT, focused on product management and QA
          </p>
        </li>
        <li>
          <b>Social Media Link, New York, NY</b> - Dec 2011 – Sept 2013
          <p>
            QA, BA and Web Production Specialist - Discover, design, and
            prioritize features with key stakeholders, manage test plans and
            conduct software QA, manage technical set up of production
            campaigns, conduct email blasts
          </p>
        </li>
        <li>
          <b>SimplyEngage LLC, New York, NY</b> - Aug 2010 – Nov 2011
          <p>
            QA Manager, Production Specialist - Managed software QA for C# .NET
            project, working directly with in-house and offshore development
            team. Conduct production database updates using SQL Server. Launched
            email blasts and worked with clients to build custom website
            front-ends and templates
          </p>
        </li>
      </ul>
      <p>
        To see a full list of projects I have worked on, check out my{" "}
        <Link to="/portfolio/">
          <b>portfolio</b>
        </Link>
      </p>
      <h2>Education</h2>
      <p>
        <ul>
          <li>
            William Paterson University of NJ, 2001 - 2006 -{" "}
            <b>BS Computer Science</b>
          </li>
          <li>
            Bearded Eagle, Feb. 2017 – <b>Scrum Product Owner Certification</b>
          </li>
        </ul>
      </p>
      <h2>Contact</h2>
      <p>
        Contact me via email: <b>mantelln@gmail.com</b>, or use my{" "}
        <Link to="/contact/">
          <b>contact form</b>
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage

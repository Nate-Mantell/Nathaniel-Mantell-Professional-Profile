import React from "react"

import Layout from "../components/Layout"

import styles from "./contact.module.scss"
import "./contact.css"

const ContactPage = () => (
  <Layout
    title="Contact"
    description="Nathaniel Mantell is a web software developer - contact me!"
    socialImage="photo.jpg"
  >
    <h1>Contact Me</h1>
    <p>
      You can contact me about anything! Need a website built? An application? A
      pizza delivered?
    </p>
    <p>Use the contact form below or send me an email at mantelln@gmail.com</p>

    <div class="form-style-2">
      <form method="post" action="https://formspree.io/mpzlarkl">
        <label for="name">
          <span>
            Name <span class="required">*</span>
          </span>
          <input type="text" class="input-field" name="name" />
        </label>
        <label for="_replyto">
          <span>
            Email <span class="required">*</span>
          </span>
          <input type="text" class="input-field" name="_replyto" />
        </label>
        <label>
          <span>Telephone</span>
          <input
            type="text"
            class="tel-number-field"
            name="tel_no_1"
            maxlength="4"
          />
          -
          <input
            type="text"
            class="tel-number-field"
            name="tel_no_2"
            maxlength="4"
          />
          -
          <input
            type="text"
            class="tel-number-field"
            name="tel_no_3"
            maxlength="10"
          />
        </label>
        <label for="message">
          <span>
            Message <span class="required">*</span>
          </span>
          <textarea name="message" class="textarea-field"></textarea>
        </label>
        <input type="text" name="_gotcha" className={styles["hidden"]} />

        <label>
          <span> </span>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  </Layout>
)

export default ContactPage

/*
<label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="_replyto" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <input type="text" name="_gotcha" className={styles["hidden"]} />
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>

      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
*/

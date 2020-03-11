import React from "react"

import Layout from "../components/Layout"

import styles from "./contact.module.scss"
import "./contact.css"

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <Layout
        title="Contact"
        description="Nathaniel Mantell is a web software developer - contact me!"
        socialImage="photo.jpg"
      >
        <h1>Contact Me</h1>
        <p>
          You can contact me about anything! Need a website built? An
          application? A pizza delivered?
        </p>
        <p>
          Use the contact form below or send me an email at mantelln@gmail.com
        </p>

        <div class="form-style-2">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mpzlarkl"
            method="POST"
          >
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

            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <label>
                <span> </span>
                <input type="submit" value="Submit" />
              </label>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

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

import React from 'react'
import './ContactForm.scss'
import axios from 'axios'
import MessageSend from './MessageSend/MessageSend'

export default function ContactForm() {
  const formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const [form, setForm] = React.useState(formData)
  const [errors, setErrors] = React.useState(null)
  const [success, setSuccess] = React.useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (event) => {
    setSuccess(false)
    setErrors(null)
      event.preventDefault()
      axios
        .post(`/api/contact_messages`, form)
        .then(function (response) {
          setSuccess(true)
        })
        .catch(function (error) {
          if (error.response) {
            setErrors(error.response.data.violations)
          }
        })
  }

  function handleError(field) {
    if (errors) {
      var errorList = []
      for (let i = 0; i < errors.length; i++) {
        if (field.includes(errors[i].propertyPath)) {
          errorList.push(errors[i].message)
          return (
            <div className="error-message">
              {errorList.map((error, index) => (
                <p className={'form-error'} key={index}>
                  {error}
                </p>
              ))}
            </div>
          )
        }
      }
    }
  }

  function successMessage() {
    if (!errors) {
      return <MessageSend />
    }
  }

  return (
    <div className="contact-form">
      {success ? (
        successMessage()
      ) : (
        <form onSubmit={handleSubmit} method="" id="contactForm">
          <div className="contact-form-inputs">
            {success ? successMessage() : null}
            <div className="contact-form-input-wrapper  input-name">
              {errors ? handleError('name') : null}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nom Prénom*"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="contact-form-input-wrapper  input-email">
              {errors ? handleError('email') : null}
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email*"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="contact-form-input-wrapper  input-subject">
              {errors ? handleError('subject') : null}
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Sujet*"
                value={form.subject}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="contact-form-input-wrapper  input-message">
              {errors ? handleError('message') : null}
              <textarea
                name="message"
                className="form-control"
                placeholder="Message*"
                value={form.message}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="contact-form-submit">
            <input className="button" type="submit" value="Envoyer" />
          </div>
        </form>
      )}
    </div>
  )
}

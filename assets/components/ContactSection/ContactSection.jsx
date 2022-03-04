import React from 'react'
import ContactForm from './contactForm/ContactForm'
import ContactMethod from './ContactMethod/ContactMethod'
import './ContactSection.scss'

export default function ContactSection() {
  return (
    <section className={'mandatory-scroll-snapping'} id="FifthSection">
      <div className={'contactSection'}>
        <div className={'section-title'}>
          Contact<span className={'line'}></span>
        </div>
        <div className={'contact-container'}>
            <ContactMethod />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

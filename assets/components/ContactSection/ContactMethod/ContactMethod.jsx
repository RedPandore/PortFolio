import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ContactItem from './ContactItem/ContactItem'
import './ContactMethod.scss'
import { FaLinkedin, FaDiscord } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function ContactMethod() {
  const [linkedin, setLinkedin] = React.useState()
  const [discord, setDiscord] = React.useState()
  const [email, setEmail] = React.useState()

  React.useEffect(() => {
    axios.get('/api/users').then((res) => {
      setLinkedin(res.data[0].linkedin)
      setDiscord(res.data[0].discord)
      setEmail(res.data[0].email)
    })
  }, [])
  return (
    <div className="contact-method">
      <ContactItem method="linkedin" link={linkedin} logo={<FaLinkedin />}/>
      <ContactItem method="discord" link={discord} logo={<FaDiscord/>} />
      <ContactItem method="email" link={email} logo={<SiGmail/>} />
    </div>
  )
}

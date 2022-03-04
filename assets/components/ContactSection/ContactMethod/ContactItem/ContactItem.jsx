import React from 'react'
import { imageUploadUrl } from '../../../../scripts/ReactApp/image'
import './ContactItem.scss'

export default function ContactItem(props) {
  var isMail = props.method === 'email'
  return (
    <div className="contact-item">
      <a
        href={isMail ? `mailto:${props.link}` : props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={'skill-box'}>
          <div className={'skill-box-title'}>{props.method}</div>
          <div className={'skill-box-image'}>{props.logo}</div>
        </div>
      </a>
    </div>
  )
}

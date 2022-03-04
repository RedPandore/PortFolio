import React, { useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import './DescriptionSection.scss'

export default function DescriptionSection() {
  const sanitize = (html) => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'p',
        'a',
        'ul',
        'ol',
        'nl',
        'li',
        'b',
        'i',
        'strong',
        'em',
        'strike',
        'code',
        'hr',
        'br',
        'div',
        'tr',
        'th',
        'td',
        'pre',
        'span',
      ],
      ALLOWED_ATTR: ['class'],
    })
  }
  const [user, setUser] = React.useState({})
  useEffect(() => {
    axios.get('/api/users').then((res) => {
      setUser(res.data[0])
    })
  }, [])
  return (
    <section className={'mandatory-scroll-snapping'} id="SecondSection">
      <div className="description-section">
      <div className={'section-title'}>
          À propos<span className={'line'}></span>
        </div>
        <div className="description-section-content">
          <div
            dangerouslySetInnerHTML={{ __html: sanitize(user.description) }}
            className={"description-section-content-text"}
          ></div>{' '}
        </div>
      </div>
    </section>
  )
}

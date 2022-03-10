import React, { useEffect } from 'react'
import '../styles/basic/404.scss'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found'
    var myText = document.getElementById('bounceTxt').innerHTML,
      wrapText = ''

    for (var i = 0; i < myText.length; i++) {
      wrapText += '<em>' + myText.charAt(i) + '</em>'
    }

    document.getElementById('bounceTxt').innerHTML = wrapText

    var myLetters = Array.from(document.getElementsByTagName('em')),
      i = 0
    function applyBounce() {
      setTimeout(function () {
        myLetters[i].className = 'bounceLetter'
        i++

        if (i < myLetters.length) {
          applyBounce()
        }
      }, 250)
    }

    applyBounce()
  }, [])

  return (
    <div className="Container404">
      <div className="content404">
        <h1 id="bounceTxt">404</h1>
        <p>Cette page n'existe pas</p>
        <a href="/">
          <button className="button">Retour à l'accueil</button>
        </a>
      </div>
    </div>
  )
}

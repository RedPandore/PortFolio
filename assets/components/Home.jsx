import React from 'react'
import basicPreview from '../images/basicPreview.png'
import gamePreview from '../images/gamePreview.png'
import '../styles/basic/Home.scss'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h1>Developpeur web & Web mobile</h1>
        <p>Quelle version voulez-vous visiter ?</p>
      </div>
      <div className="home-link">
        <div className="link-one">
          <span id="BasicChoise">
            <img className="link-iframe" src={basicPreview}></img>
          </span>
        </div>
        <div className="link-two">
          <span id="GameChoise">
            <img className="link-iframe" src={gamePreview}></img>
          </span>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import basicPreview from '../images/basicPreview.png'
import gamePreview from '../images/gamePreview.png'
import '../styles/basic/Home.scss'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-text">
        <h1>Houry Tennessee</h1>
        <h2>Developpeur <span>Web</span> & <span>Web Mobile</span></h2>
        <p>Quelle version voulez-vous visiter <span>?</span></p>
      </div>
      <div className="home-link">


        <div className="single-link-container left">
          <div className="link-one">
            <span id="BasicChoise">
              <img className="link-iframe" src={basicPreview}></img>
            </span>
          </div>
          <div className="link-text">
            <h3>Version basique</h3>
            <p>Portfolio <span>standard</span>, réaliser avec <span>Symfony</span> et <span>ReactJs</span></p>
          </div>
        </div>



       <div className="single-link-container right">
          <div className="link-text">
            <h3>Version jeu rétro</h3>
            <p>Portfolio <span>jeu rétro</span>, réaliser avec <span>Symfony</span> et <span>ReactJs</span></p>
          </div>
          <div className="link-two">
            <span id="GameChoise">
              <img className="link-iframe" src={gamePreview}></img>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

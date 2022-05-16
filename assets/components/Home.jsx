import React from 'react'
import '../styles/basic/Home.scss'
import { SiRetropie } from 'react-icons/si'
import { IoIosPaper } from 'react-icons/io'
import Logo from '../images/tens-logo.png'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-section__header">
        <div className="home-section__header-name">
          <h1>Houry Tennessee</h1>
        </div>
        <div className="home-section__header-logo">
          <img src={Logo} alt="logo" className="logo-th" />
        </div>
        <div className="home-section__header-description">
          <h2>
            Développeur <span>Web</span> & <span>Web Mobile</span>
          </h2>
        </div>
      </div>

      <p className="question">
        Quelle version voulez-vous visiter <span>?</span>
      </p>
      <div className="home-link">
        <div className="home-link-container">
          <div
            className="single-link-container left"
            data-aos="fade-right"
            id="BasicChoise"
          >
            <div className="link-text">
              <h3>Version basique</h3>

              <span className="home-icon">
                <IoIosPaper />
              </span>

              <p>
                Portfolio <span>standard</span>, réaliser avec{' '}
                <span>Symfony</span> et <span>ReactJs</span>
              </p>
            </div>
          </div>

          <div
            className="single-link-container right"
            data-aos="fade-left"
            id="GameChoise"
          >
            <div className="link-text">
              <h3>Version jeu rétro</h3>

              <span className="home-icon">
                <SiRetropie />
              </span>

              <p>
                Portfolio <span>jeu rétro</span>, réaliser avec{' '}
                <span>Symfony</span> et <span>ReactJs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useEffect } from 'react'

import '../styles/basic/Basic.scss'

import NavBar from './navbar/navbar'
import PresentationSection from './PresentationSection/PresentationSection'
import SkillSection from './SkillSection/SkillSection'
import ProjectSection from './ProjectSection/ProjectSection'
import ContactSection from './ContactSection/ContactSection'
import DescriptionSection from './DescriptionSection/DescriptionSection'
import toggleActive from '../scripts/ReactApp/toggleActive'
import Home from './Home'
import {
  isBrowser,
  isMobile,
} from 'react-device-detect'

export default function Basic() {
  useEffect(() => {
    const main = document.querySelector('.home')
    if (isBrowser) {
      const basicButton = document.getElementById('BasicChoise')
      const gameButton = document.getElementById('GameChoise')
      const homeSection = document.querySelector('.home-section')
      main.style.display = 'none'
      basicButton.addEventListener('click', () => {
        homeSection.classList.add('fadeOutHome')
        setTimeout(() => {
          main.style.display = 'block'
          homeSection.style.display = 'none'
        }, 1500)

        main.addEventListener('scroll', toggleActive)
        main.addEventListener('scroll', ScrollDown)
      })
      gameButton.addEventListener('click', () => {
        homeSection.classList.add('fadeOutHome')
        setTimeout(() => {
          window.location.href = '/game'
        }, 800)
      })
    }
    if (isMobile) {
      main.addEventListener('scroll', toggleActive)
      main.addEventListener('scroll', ScrollDown)
    }
  }, [])

  function ScrollDown() {
    document.getElementById('ScrollDown').style.opacity = '0'
  }
  return (
    <>
      {isBrowser ? <Home /> : ' '}
      <div className={'home'}>
        <NavBar />
        <div className="home-container">
          <PresentationSection />
          <DescriptionSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </div>
    </>
  )
}

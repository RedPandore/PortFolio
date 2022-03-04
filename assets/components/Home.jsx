import React, { useEffect } from 'react'
import '../styles/basic/home.scss'

import NavBar from './navbar/navbar'
import PresentationSection from './PresentationSection/PresentationSection'
import SkillSection from './SkillSection/SkillSection'
import ProjectSection from './ProjectSection/ProjectSection'
import ContactSection from './ContactSection/ContactSection'
import DescriptionSection from './DescriptionSection/DescriptionSection'
import toggleActive from '../scripts/ReactApp/toggleActive'

export default function Home() {
    useEffect(() => {
        const main = document.querySelector('.home');
        main.addEventListener('scroll', toggleActive);
       
      }, [])
  return (
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
  )
}

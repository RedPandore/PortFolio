import React from 'react'
import SkillContainer from './Skillcontainer/SkillContainer'
import './SkillSection.scss'

export default function SkillSection() {
  return (
    <section className={'mandatory-scroll-snapping'} id="ThirdSection">
      <div className={'skill-section'}>
        <div className={'skill-section-container'}>
          <div className={'section-title'}>
            Compétences<span className={'line'}></span>
          </div>
          <SkillContainer />
        </div>
      </div>
    </section>
  )
}

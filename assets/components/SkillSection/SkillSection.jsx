import React from 'react'
import SkillContainer from './Skillcontainer/SkillContainer'
import './SkillSection.scss'
import CanvasWrapper from './WordStorm/CanvasWrapper'
import axios from 'axios'

export default function SkillSection() {
  const [skills, setSkills] = React.useState([])
  const [loading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios
      .get('/api/skills')
      .then((response) => {
        setSkills(
          response.data.filter(
            (skill) =>
              skill.categorie != 'Soft Skill' && skill.categorie != 'Profil',
          ),
        ),
          setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

var skillsList = []

skills.map((skill) => {
    skillsList.push(skill.name)
})

  return (
    <section className={'mandatory-scroll-snapping'} id="ThirdSection">
      <div className={'skill-section'}>
        <div className={'skill-section-container'}>
          <div className={'section-title'}>
            Compétences<span className={'line'}></span>
          </div>
          {skillsList.length < 1 ? (
            <div>Loading...</div>
          ) : (
            <CanvasWrapper skillsList={skillsList}/>
          )}
          {/* <SkillContainer />*/}
        </div>
      </div>
    </section>
  )
}

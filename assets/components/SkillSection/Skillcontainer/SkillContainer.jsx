import React from 'react'
import axios from 'axios'
import './SkillContainer.scss'
import SkillBox from './skillBox/SkillBox'

export default function SkillContainer() {
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

  return (
      <div className={'skill-container'}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          skills.map((skill) => <SkillBox key={skill.id} skill={skill} />)
        )}
      </div>
  )
}

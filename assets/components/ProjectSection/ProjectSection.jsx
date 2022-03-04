import React from 'react'
import './ProjectSection.scss'
import ProjectCard from './projectCard/ProjectCard'
import axios from 'axios'

export default function ProjectSection() {
  const [projects, setProjects] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setProjects(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <section className={'mandatory-scroll-snapping'} id="FourthSection">
      <div className={'projectSection'}>
        <div className={'section-title'}>
          Projets<span className={'line'}></span>
        </div>

        <div className={'project-container'}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useState } from 'react'
import './ProjectSection.scss'
import ProjectCard from './projectCard/ProjectCard'
import axios from 'axios'
import Paginator from 'react-hooks-paginator'

export default function ProjectSection() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const pageLimit = 4
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setProjects(response.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  useEffect(() => {
    setCurrentData(projects.slice(offset, offset + pageLimit))
    setIsLoading(false)
  }, [offset, projects])

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
            <>
              {currentData.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
             
            </>
          )}
        </div>
        <Paginator
                totalRecords={projects.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
      </div>
    </section>
  )
}

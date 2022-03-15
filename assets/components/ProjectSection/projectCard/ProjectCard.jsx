import React from 'react'
import './projectCardStyle.scss'
import { imageUploadUrl } from '../../../scripts/ReactApp/image'

export default function ProjectCard(props) {
  const { project } = props

  var backEnd
  project.backEnd ? (backEnd = Object.entries(project.backEnd)) : (backEnd = [])
  var frontEnd
  project.frontEnd
    ? (frontEnd = Object.entries(project.frontEnd))
    : (frontEnd = [])
  var backgroundImage = imageUploadUrl(project.imageName)

  return (
    <div className={'outerCard'}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="container">
          <div
            className="projectImage"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>

          <div className="language">
            <h4>Back End</h4>
            <ul>
              {backEnd.map((item) => (
                <li key={item[0]}>{item[1]}</li>
              ))}
            </ul>
          </div>
    
          <div className="framework">
            <h4>Front End</h4>
            <ul>
              {frontEnd.map((item) => (
                <li key={item[0]}>{item[1]}</li>
              ))}
            </ul>
          </div>
          <div className="projectName">{project.name}</div>
        </div>
      </a>
    </div>
  )
}

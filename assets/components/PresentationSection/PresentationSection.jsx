import React from 'react'
import './presentationSection.scss'
import { imageUploadUrl } from '../../scripts/ReactApp/image'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin, FaDiscord } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import SkilltypeWritter from './TypeWritter/SkilltypeWritter'

export default function PresentationSection() {
  const [user, setUser] = React.useState({})
  const [skills, setSkills] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios.get('/api/users').then((res) => {
      setUser(res.data[0])
    })
    axios.get('/api/skills').then((res) => {
      setSkills(
        res.data.filter(
          (skill) =>
            skill.categorie != 'Soft Skill' && skill.categorie != 'Profil',
        ),
      )
      setIsLoading(false)
    })
  }, [])

  return (
    <section className={'mandatory-scroll-snapping'} id="FirstSection" >
      <div className="presentationSection" >
        <div className={'presentation-container'}>
          <div className={'presentation-card'}>
            <div className={'presentation-card-image'}>
              <img
                src={
                  user.imageName
                    ? imageUploadUrl(user.imageName)
                    : 'https://via.placeholder.com/150'
                }
                alt={'profile'}
              />
            </div>
            <div className={'presentation-card-info'}>
              <div className={'presentation-card-info-name'}>
                Salut, moi c'est
                <span>
                  {user?.firstname
                    ? ' ' + user.firstname + ' ' + user.lastname
                    : ''}
                </span>
              </div>
              <div className={'presentation-card-info-description'}>
                {!isLoading ? (
                  <SkilltypeWritter
                    type={'Développeur Web / Web Mobile'}
                    skills={skills}
                  />
                ) : (
                  ' Loading ...'
                )}
              </div>
              <div className={'presentation-card-info-social'}>
                <a href={user.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={user.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </a>
                <a href={'mailto:' + user.email}>
                  <SiGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"arrow-box"} id="ScrollDown">
       <div className={"circle"}></div>
        </div>
      </div>
    
    </section>
  )
}

import React, { useEffect } from 'react'
import './navbar.scss'
import Logo from '../../images/tens-logo.png'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { VscProject } from 'react-icons/vsc'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import { FaGamepad } from 'react-icons/fa'

export default function NavBar() {

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links" id="navbar-links">
          <li id="Presentation" className="FirstSection">
            <a
              href="#FirstSection"
            >
              <AiOutlineHome />
              <span>Accueil</span>
            </a>
          </li>
          <li id="Description" className="SecondSection">
            <a
              href="#SecondSection"
            >
              <AiOutlineUser /> <span>À propos</span>
            </a>
          </li>
          <li id="Skill" className="ThirdSection">
            <a
              href="#ThirdSection"
            >
              <GiSkills /> <span>Compétences</span>
            </a>
          </li>
          <li id="Project" className="FourthSection">
            <a
              href="#FourthSection"
            >
              <VscProject /> <span>Mes projets</span>
            </a>
          </li>
          <li id="Contact" className="FifthSection">
            <a
              href="#FifthSection"
            >
              <MdOutlineConnectWithoutContact /> <span>Contact</span>
            </a>
          </li>
        </ul>
        <hr/>
        <ul className="navbar-links-game">
            <li>
                <a href="
                /game"
                >
                <FaGamepad /> <span>Version jeu</span>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}


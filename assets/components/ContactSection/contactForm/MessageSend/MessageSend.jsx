import React from 'react'
import './MessageSend.scss'
import {SiAzuredataexplorer} from 'react-icons/si'
import {AiOutlineCloudServer} from 'react-icons/ai'

export default function MessageSend() {

    setTimeout(() => {
        document.getElementById('paperPlane').style.display = 'none'
        document.getElementById('cloudIcon').style.display = 'none'
        document.getElementById('successMessage').style.display = 'block'
        setTimeout(() => {
            document.getElementById('successMessageContent').style.opacity = '1'
        }, 1500)
    }, 3000)
   

  return (
    <div className="message-send">  
      <div className="success-message" id="successMessage">
        <p className='success-message-content' id='successMessageContent'>Votre message a était envoyé!</p>
      </div>
        <div className="animation-icon">
      <AiOutlineCloudServer className="cloud-icon" id="cloudIcon"/>
      <SiAzuredataexplorer className="paper-plane" id="paperPlane"/>
      </div>
    </div>
  )
}

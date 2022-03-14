import React, { useState } from 'react'
import './MessageSend.scss'
import { SiAzuredataexplorer } from 'react-icons/si'
import { AiOutlineCloudServer } from 'react-icons/ai'

export default function MessageSend() {
    setTimeout(() => {
      document.getElementById('paperPlane').style.display = 'none'
      document.getElementById('cloudIcon').style.display = 'none'
      document.getElementById('successMessage').style.display = 'flex'
      setTimeout(() => {
        document.getElementById('successMessageContent').style.opacity = '1'
      }, 2000)
    }, 2000)

  return (
    <>
      <div className="message-send">
        <div className="success-message" id="successMessage">
            <div className="svg-wrapper">
              <svg height="150" width="500" xmlns="http://www.w3.org/2000/svg">
                <rect
                  className="shape1"
                  height="150"
                  width="500"
                  rx="10"
                  ry="10"
                />
                <rect
                  className="shape2"
                  height="150"
                  width="500"
                  rx="10"
                  ry="10"
                />
                <text
                  className="successMessageContent"
                  id="successMessageContent"
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {' '}
                  Votre message à était envoyé!
                </text>
              </svg>
            </div>
        </div>
        <div className="animation-icon">
          <AiOutlineCloudServer className="cloud-icon" id="cloudIcon" />
          <SiAzuredataexplorer className="paper-plane" id="paperPlane" />
        </div>
      </div>
    </>
  )
}

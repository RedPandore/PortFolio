import React from 'react'
import Typewriter from 'typewriter-effect'

export default function SkilltypeWritter(props) {
  return (
    <div className={'skill-type-writter'}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              'Je suis un <span class="overlight">' +
                props.type +
                '</span><br>',
            )
            .typeString("J'utilise : ")
          {
            props.skills.map((skill) =>
              typewriter.typeString('<span class="overlight">' + skill.name + '</span>').pauseFor(500).deleteChars(skill.name.length),
            )
          }
          typewriter.typeString('<span class="overlight"> mon cerveau </span> <br>')
            typewriter.typeString('Bonne visite !')
          typewriter.start()
        }}
      />
    </div>
  )
}

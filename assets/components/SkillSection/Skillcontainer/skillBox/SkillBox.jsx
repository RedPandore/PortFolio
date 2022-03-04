import React from 'react'
import './SkillBox.scss'
import { imageUploadUrl } from '../../../../scripts/ReactApp/image';

export default function SkillBox(props) {
  const skill = props.skill;
  return (
    <div className={'skill-box'}>
      <div className={'skill-box-title'}>{skill.name}</div>
        <div className={'skill-box-image'}>
            <img src={imageUploadUrl(skill.imageName)} alt={skill.name} />
        </div>
      
      
    </div>
  )
}

import { Col, Progress, Row } from 'antd'
import React from 'react'
import "./about-skills-page.scss";
import { Skills } from '../../utils/common-utils'

const AboutSkills = () => {
  return (
    <div className='skill-page-container'>
        <div className='skills-tites'>
            <h1>MY SKILLS</h1>
        </div>
      <Row>
        {Skills.map(row=> <Col className='skil-columns' span={6}>
          <Progress className='skill-progress-bar' type="circle" percent={row.percentage} />
          <div className='progress-skill-name'>{row.skilName}</div>
        </Col>)}
      </Row>  
    </div>
  )
}

export default AboutSkills
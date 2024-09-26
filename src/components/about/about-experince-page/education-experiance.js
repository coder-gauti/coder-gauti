import React from 'react'
import "./education-experiance.scss";
import { EducationExperiances } from '../../utils/common-utils'
import { Col, Row } from 'antd'
import { CalendarFilled } from '@ant-design/icons';

const EducationExperiance = () => {
  return (
    <div className='education-page-container'>
        <div className='edu-exp-title'>
            <h3>EXPERIANCE & EDUCATION</h3>
        </div>
        
<Row className='edu-exp-deatails-container'>
       
        {EducationExperiances.map(row=> <Col className='edu-exp-columns' span={12}>
        <div className='calendar-icon'>
       <CalendarFilled />
       </div>
         <span className = "date-section"> {row.date}</span>
          <h3 className='title-section'>{row.title}</h3>
          <p className= 'title-detail-section'> {row.titleDeatils}</p>
        </Col>)}
      </Row>  
    </div>
  )
}

export default EducationExperiance
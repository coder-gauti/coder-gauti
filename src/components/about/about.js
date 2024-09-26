import React from 'react'
import { ABOUT_DETAILS } from '../utils/common-utils';
import "./about.scss";
import { Button, Col, Progress, Row } from 'antd';
import { ArrowDownOutlined, SendOutlined } from '@ant-design/icons';
import AboutSkills from './about-skills-page/about-skills-page';
import EducationExperiance from './about-experince-page/education-experiance';

const AboutpPage = () => {
  

  return (
    <>
      <div className='about-contents-containers'>
        <div className='about-title-section'>
          <h1>ABOUT <span>ME</span></h1>
          <span className='about-title-bg'>RESUME</span>
        </div>
        <div className='about-body-section'>
          <div className='personal-details-section'>
            <div className='personal-info-title'>
              <h3>PERSONAL INFO'S</h3>
            </div>
            <div className='personal-info-details'>
              <ul className='personal-info-parts'>
                <li>
                  <span className='titles'>First Name: <span className='values'>{ABOUT_DETAILS.firstName}</span></span>
                </li>
                <li>
                  <span className='titles'>Last Name: <span className='values'>{ABOUT_DETAILS.lastName}</span></span>
                </li>
                <li>
                  <span className='titles'>Age: <span className='values'>{ABOUT_DETAILS.age}</span></span>
                </li>
                <li>
                  <span className='titles'>Nationality: <span className='values'>{ABOUT_DETAILS.nationality}</span></span>
                </li>
                <li>
                  <span className='titles'>Freelance: <span className='values1'>{ABOUT_DETAILS.freelance}</span></span>
                </li>
                <li>
                  <span className='titles'>Address: <span className='values'>{ABOUT_DETAILS.address}</span></span>
                </li>
                <li>
                  <span className='titles'>Phone: <span className='values'>{ABOUT_DETAILS.phone}</span></span>
                </li>
                <li>
                  <span className='titles'>Email: <span className='values'>{ABOUT_DETAILS.email}</span></span>
                </li>
                <li>
                  <span className='titles'>Skype: <span className='values'>{ABOUT_DETAILS.skype}</span></span>
                </li>
                <li>
                  <span className='titles'>Language: <span className='values'>{ABOUT_DETAILS.lamguage}</span></span>
                </li>
              </ul>
              <div className='nex-page-button '>
                <Button>DOWNLOAD <ArrowDownOutlined /></Button>
              </div>
            </div>
          </div>
          <div className='work-ferformance-container'>
            <div className='performance-boxes'>
              <div className='boxes'>
                <div className='boxes-stats'>
                  <h3 className='work-digits'>{ABOUT_DETAILS.experianceYears}</h3>
                  <p className='work-texts'>Year of <br /> <span className='work-texts2'>Experiance</span></p>
                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-stats'>
                  <h3 className='work-digits'>{ABOUT_DETAILS.projectNo}</h3>
                  <p className='work-texts'>completed<br /> <span className='work-texts2'>projects</span></p>
                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-stats'>
                  <h3 className='work-digits'>{ABOUT_DETAILS.happyCustomer}</h3>
                  <p className='work-texts'>happy<br /> <span className='work-texts2'>customer</span></p>

                </div>
              </div>
              <div className='boxes'>
                <div className='boxes-stats'>
                  <h3 className='work-digits'>{ABOUT_DETAILS.awards}</h3>
                  <p className='work-texts'>awards <br /> <span className='work-texts2'>won</span></p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutSkills/>

      <EducationExperiance/>

    </>
  )
}

export default AboutpPage;
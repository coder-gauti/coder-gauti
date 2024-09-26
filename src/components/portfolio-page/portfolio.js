import React from 'react'
import "./portfolio.scss";
import { Tabs } from 'antd';
import AllFolder from './works-foder/all-folder';


const PortfolioWorks = () => {
  return (
    <div className='portfolio-page-container'>
      <div className='portfolio-title-section'>
          <h1>MY <span>PORTFOLIO</span></h1>
          <span className='portfolio-title-bg'>WORKS</span>
        </div>
        <div className='fortfolio-tab-container'>
          <div className='portfolio-tabs'>  
          <Tabs
          className='tabs-keys'
    defaultActiveKey="1"
    items={[
      {
        label: 'ALL',
        key: '1',
        children: (<AllFolder/>),
      },
      {
        label: 'PROJECT',
        key: '2',
        children: 'Tab 2',
      },
      {
        label: 'CERTIFICATION',
        key: '3',
        children: "",
      },
      {
        label: 'AWARDS',
        key: '4',
        children: 'Tab 4',
      },
      {
        label: 'HOBBY',
        key: '5',
        children: 'Tab 5',
      },
    ]}
  />

          </div>
        </div>
    </div>
  )
}

export default PortfolioWorks;
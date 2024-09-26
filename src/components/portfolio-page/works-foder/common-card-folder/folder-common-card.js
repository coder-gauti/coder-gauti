import React from 'react'
import "./folder-common-card.scss";
import { Card } from 'antd';

const CommonFolderCard = (props) => {
  return (
    // <div className='card-container'>
        <Card
        className="card-container"
    style={{
      width: 300,
      height: 200,
    }}
    onClick={props.onClick}
  >
    <div className='card-body'>
        <img className='card-img' src={props.src}/>
        <h3>{props.title}</h3>
    </div>
  </Card>
    // </div>
  )
}

export default CommonFolderCard
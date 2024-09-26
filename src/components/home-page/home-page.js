import React from 'react'
import "./home-page.scss";
// import sideImg from "../assets/Rectangle 36.svg"
import profileImg from "../assets/my-img.jpg"
import { Button } from 'antd';

import { ArrowRightOutlined } from '@ant-design/icons';
import { USER_DETAILS } from '../utils/common-utils';

const HomeContent = () => {
    return (
        <div className='home-page-dashboard'>
            <div className='home-page-image-section'>
                <div className='home-page-side-img'>
                    {/* <img src={sideImg} /> */}
                </div>
                <div className='home-page-profile-img'>
                    <img src={profileImg}/>
                </div>
            </div>
            <div className='home-page-text-section'>
                <div className='profile-deatils'>
                <div className='name-profile-text'>
                    {/* <div className='line-bar'> */}
                    {/* <hr /> */}
                    <p className='profile-name'>{USER_DETAILS.name}</p>
                    {/* </div> */}
                    {/* <div className='name-position'> */}
                        
                    <p className='role-text'>{USER_DETAILS.role}</p>
                    {/* </div> */}
                    </div>
                    <p className='about-text'>{USER_DETAILS.about}</p>
                    <div className='nex-page-button '>
                        <Button>More about me <ArrowRightOutlined /></Button>
                     </div>
                </div>
               

            </div>
        </div>
        
    )
}

export default HomeContent;
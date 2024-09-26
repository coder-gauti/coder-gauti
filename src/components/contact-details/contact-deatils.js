import React, { useEffect, useState } from 'react'
import { CONTACT_DETAILS } from '../utils/common-utils'
import "./contact-details.scss";
import TextArea from 'antd/es/input/TextArea'
import { Button, Input } from 'antd'
import addressImg from "../assets/icons/address-icon-img.svg"
import mailImg from "../assets/icons/mail-icon-img.svg"
import callImg from "../assets/icons/call-icon-img.svg"
import { SendOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';

const ContactPage = () => {
 
  
  return (
    <div className='contact-contents'>
    <div className='contact-contents-titles'>
      <h1>GET IN <span>TOUCH</span></h1>
      <span className='contact-title-bg'>CONTACT</span>

    </div>
    <div className='contact-contents-body-parts'>
      <div className='contact-details-parts'>
        <h3>DON'T BE SHY</h3>
        <p className='experiance-text'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        <p className='personal-details-text'><img className='icons-fitting' src={addressImg}/><span className='block-details'>ADDRESS POINT <br/></span>{CONTACT_DETAILS.address}</p>
        <p className='personal-details-text'><img className='icons-fitting' src={mailImg}/><span className='block-details'>MAIL ME <br/></span>{CONTACT_DETAILS.email}</p>
        <p className='personal-details-text'><img className='icons-fitting' src={callImg}/><span className='block-details'>CALL ME <br/></span>{CONTACT_DETAILS.phone}</p>

      </div>
      <div className='contact-medium-section'>
        <div className='personal-biodata'>
          <div className='name-input-box'>
          <Input className='input-holder'
          name='name'
          type='text'
          // onChange={""}
          // value={formData.name}
           placeholder="First Name" />
          </div>
          <div className='name-input-box'>
          <Input className='input-holder' 
          lastName='name'
          type='text'
          // onChange={""}
          // value={formData.name}
          placeholder="Last Name" />
          </div>
          
        </div>
        <div className='contact-subject-input-container'>
           <Input className='input-holder' 
           subject='subject'
           type='text'
          //  onChange={""}
          //  value={formData.subject}
           placeholder="Your Subject" />
        </div>
        <div className='contact-message-input-container'>
           <TextArea className='input-text'
           message='message'
           type='text'
          //  onChange={""}
          //  value={formData.message}
           rows={6} placeholder="Your Message" maxLength={6} />
        </div>
        <div className='nex-page-button '>
           <Button onSubmit={""}
           onClick={""}
           >Send Mesaage <SendOutlined /></Button>
        </div>

      </div>
    </div>
</div>
  )
}

export default ContactPage;
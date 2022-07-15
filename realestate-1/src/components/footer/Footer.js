import React from 'react'
import {ImFacebook2, ImTwitter, ImInstagram, ImYoutube } from 'react-icons/im'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <ImFacebook2 className='icon' />
            <ImTwitter className='icon' />
            <ImInstagram className='icon' />
            <ImYoutube className='icon' />
        </div>
    </div>
  )
}

export default Footer
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
        <div className='container'>
            <div className='col'>
                <h3>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <h3>Company</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <h3>Legal</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
        </div>
        <div className='container'>
            <div className='col'>
                <h3>Careers</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'

import Home1 from '../../assets/home1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen1.jpg'
import Bathroom from '../../assets/bath1.jpg'

const featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-teext'>Top Featured Listings</h1>
        <p>Selected listings by City, State, & Zip based on views</p>
        <div className='container'>
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Wonderful Ave, Brooklyn</h2>
                    <p>House for Sale</p>
                    <p className='price'>$3,450,000</p>
                </div>
                <div className='info-grid'>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>5</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>7</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>7,456</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est Payment:</p><p>$4,500/mo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default featured
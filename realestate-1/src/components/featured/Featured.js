import React from 'react'

import Home1 from '../../assets/home1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen1.jpg'
import Bathroom from '../../assets/bath1.jpg'


import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath3.jpg'
import LivingRoom from '../../assets/livingRoom1.jpg'

const featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Home1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A wonderful home with great indoor space. Spacious and luxurious master bathroom located in Brooklyn. Including media room, workout facility, and tons of yard space. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

            {/* second section */}


            <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$3,450,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>4</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>6</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$11,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default featured
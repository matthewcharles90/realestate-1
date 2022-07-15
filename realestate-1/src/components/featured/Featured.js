import React from 'react'

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
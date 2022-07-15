import React from 'react'
import Apt1 from '../../assets/apt-1.jpg'
import Apt2 from '../../assets/apt-2.jpg'
import Apt3 from '../../assets/apt-3.jpg'


const Great = () => {
  return (
    <div className='great'>
        <h1>Find Great Rated Properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residentual</p>
            <p>Vacation</p>
        </div>
        <div className='container'>
            <img src={Apt1} alt='' />
            <img src={Apt2} alt='' />
            <img src={Apt3} alt='' />
        </div>
        <button className='btn'>View All</button>
    </div>
  )
}

export default Great
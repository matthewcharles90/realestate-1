import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find comfort with us</h1>
            <p className='search-text'> Search the larget selection of comfortable and luxury apartments. </p>
            <form className='search'>
                <div>
                    <input type='text' placeholder='Enter Keyword..' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
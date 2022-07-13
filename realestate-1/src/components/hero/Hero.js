import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

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
                <div className='radio'>
                    <input type='radio' checked />
                    <label>Buy</label>
                    <input type='radio' checked />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
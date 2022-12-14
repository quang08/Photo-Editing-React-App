import React from 'react'

function Slider({min, max, value, handleChange}) {
  return (
    <div>
      <div className='slider-container'>
        <input 
          type='range' 
          className='slider'
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        >

        </input>
      </div>
    </div>
  )
}

export default Slider

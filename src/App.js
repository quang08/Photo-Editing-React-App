import React, { useState } from "react";
import './App.css'
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";

const DefaultOptions = [
  {
    name: 'Brightness',
    property: 'brightness', //corresponds with css filter
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast', //corresponds with css filter
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate', //corresponds with css filter
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Brightness',
    property: 'brightness', //corresponds with css filter
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale', //corresponds with css filter
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia', //corresponds with css filter
    value: 0,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate', //corresponds with css filter
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur', //corresponds with css filter
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
]

function App() {
  const [options, setOptions] = useState(DefaultOptions);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({target}){ //remember the changes made in the slider
    setOptions(prevOptions => { //loop through all the options and find the one we want to change and update it
      return (
        prevOptions.map((option, index)=>{
          if(index !== selectedOptionIndex) return option //not the selected option then return it as it is
          return {...option, value: target.value} //found the selected option, return a new object containing all our old options then  update the value to the current value
        })
      )
    })
  }

  function getImageStyle(){
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    }) //get the property in options to convert them into css filters
    
    //returning as array -> convert to style object
    return {filter: filters.join(' ')} 
    
  }
  //console.log(getImageStyle()) => filter : "brightness(100%) saturation(100%)..."
  return (
    <>
      <div className="container">
        <div className="main-image" style={getImageStyle()}/>
        <div className="sidebar">
          {options.map((option, index)=>{
            return (<SidebarItem
              key={index}
              name={option.name}
              handleClick={() => setSelectedOptionIndex(index)}
              active={index === selectedOptionIndex} //only when index === selectedOptionsIndex will it be active    
            />
            )
          })}
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
      </div>
    </>
  );
}

export default App;

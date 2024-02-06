import React from 'react'
import "./Button.css"
import search from "../../images/search.svg"
const Button = (props) => {
  return (
    
          
      <button className='button_style' onClick={props.handleChange}>
      <img src = {search} alt='search'></img> 
    {props.text}
        </button>
    
  )
}

export default Button
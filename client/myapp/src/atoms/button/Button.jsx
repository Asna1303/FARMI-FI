import React from 'react'
import "./Button.css"
import search from "../../images/search.svg"
const Button = () => {
  return (
    <div>
          
      <button className='button_style'>
      <img src = {search} ></img> 
      search
        </button>
    </div>
  )
}

export default Button
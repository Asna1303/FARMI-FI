import './App.css';
import React, {useEffect, useState} from 'react';
import Button from './atoms/button/Button';
import axios from 'axios';
import SelectField from './atoms/SelectField/SelectField';
import Discover from './atoms/discover/discover';
import Lotdetails from './atoms/lotdetails/lotdetails';
import farmpic from "./images/bg.png";
import BasicTable from './atoms/BasicTable/BasicTable';
import decr from "./images/decr.svg";
import Headings from './atoms/headings/headings';





function App() {
  const[lotOptions,setlotOptions] =useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:8000/lot/")
    .then((response)=>{
      console.log(response.data.data)
      setlotOptions(response.data.data)
    })
  })



  const handleSearch= (e) =>{
    e.preventDefault();
    console.log("Search button is clicked");

  }
  return (
    <div className="main-flex-styling">
     
     <div className='primary-text-component'>
       <Headings className="welcome-font" text="WELCOME TO AGRICULTURE FARM"/>
       <div className='text-img'>
         <Headings className="name-font" text="FARMI-fi"/>
         <img src = {decr} alt='decr'></img>
       </div>
       <Discover/>
     </div>

     <div className='details'>
      <div className='primary-box'>
        <SelectField/>
        <Button text="Search" handleChange={handleSearch}/>
      </div>
      <Lotdetails/>
      <BasicTable/>
      
     </div>
    
    </div>

  );
}

export default App;


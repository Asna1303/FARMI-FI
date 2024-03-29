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
  const [selectedLot, setselectedLot] =  useState("");
  const [data,setdata]= useState([]);

  

 useEffect(()=>{
  axios
  .get("http://localhost:8000/lot/")
  .then((response)=>{
    const displaylot = response.data.data[0]
    const options = displaylot.map((lot)=>({
      value:lot.id,
      label:lot.name,
    }))
    setlotOptions(options);
    
  }
    )
  .catch (error=>console.error("the error is : ",error))
  },[])





  // const handleSearch= (e) =>{
  //   e.preventDefault();
  //   console.log("Search button is clicked");
  //   axios
  //   .get('http://localhost:8000/data/lotdata/${selectedLot.id}/')
  // .then((response)=>{
  //  setselectedLot(response.data.data[0])
  //   console.log(selectedLot)
  //  })

  // }

  
const handlelotChange=(selectedValue)=>{
  setselectedLot(selectedValue)

}
const handleButtonClick=(e)=>{
  e.preventDefault();
  axios
  .get(`http://localhost:8000/data/lotdata/${selectedLot}/`)
  .then((response)=>{
      const lotData=response.data.data[0]
      setdata(lotData)
      console.log(data)
    })
    .catch(error=>console.error("the error is : ",error))

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
        <SelectField options={lotOptions} 
        value={selectedLot} 
        onChange={handlelotChange}/>

        <Button text="Search" 
        handleSubmit= {handleButtonClick}/>
      </div>
      <Lotdetails/>
      {data &&  <BasicTable lotData={data}/> }

     
      
     </div>
    
    </div>

  );
}

export default App;


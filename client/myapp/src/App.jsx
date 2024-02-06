import './App.css';
import Button from './atoms/button/Button';
import SelectField from './atoms/SelectField/SelectField';
import Discover from './atoms/discover/discover';
import Lotdetails from './atoms/lotdetails/lotdetails';
import farmpic from "./images/bg.png";
import BasicTable from './atoms/BasicTable/BasicTable';
import decr from "./images/decr.svg";
import Headings from './atoms/headings/headings';





function App() {
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


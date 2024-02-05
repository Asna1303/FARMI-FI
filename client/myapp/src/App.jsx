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
  return (
    <div className="App">
     <Button/>
     <SelectField/>
     <div className='example'>
     <Discover/>
     <Lotdetails/>
     < BasicTable/>
     <img src = {decr} alt='decr'></img> 
     <Headings/>
     </div>
     
    </div>
  );
}

export default App;

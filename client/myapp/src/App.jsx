import './App.css';
import Button from './atoms/button/Button';
import SelectField from './atoms/SelectField/SelectField';
import Discover from './atoms/discover/discover';
import Lotdetails from './atoms/lotdetails/lotdetails';
import farmpic from "./images/bg.png"





function App() {
  return (
    <div className="App">
     <Button/>
     <SelectField/>
     <div className='example'>
     <Discover/>
     <Lotdetails/>

     </div>
     <img src = {farmpic} alt='farmpic'></img> 
     
    </div>
  );
}

export default App;

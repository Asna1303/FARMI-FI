import './App.css';
import Button from './atoms/button/Button';
import SelectField from './atoms/SelectField/SelectField';
import Discover from './atoms/discover/discover';
import Lotdetails from './atoms/lotdetails/lotdetails';
import farmpic from "./images/bg.png";
import BasicTable from './atoms/BasicTable/BasicTable';





function App() {
  return (
    <div className="App">
      {/* <img src = {farmpic} alt='farmpic'></img>  */}
     
     <Button/>
     <SelectField/>
     <div className='example'>
     <Discover/>
     <Lotdetails/>
     < BasicTable/>

     </div>
     
    </div>
  );
}

export default App;

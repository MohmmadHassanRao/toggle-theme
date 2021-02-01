import { useState } from 'react';
import './App.css';

 




function App() {
  
  const [isLit,setLit] = useState(true)
  
  return (
    <div  className={isLit?"bright App":"dark App"}>
      
   
    <div >
      <h2 >the room is {isLit?"bright":"dark"}</h2>
      <button onClick={(prevState)=>{setLit(!isLit)}}>Change</button>
    </div>
           
    </div>
  );
}

export default App;

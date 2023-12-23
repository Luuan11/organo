
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';


function App() {

  const [funcs, setFunc] = useState([])

  const newFunc = (func) =>{
    console.log(func)
    setFunc([...funcs,func])
  }

  return (
    <div className="App">

      <Banner />
      <Form saveFunc={func => newFunc(func)}/>
      
    </div>
  );
}

export default App;

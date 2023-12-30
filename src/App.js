
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Time from './components/Time';


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
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data-science"/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Time from './components/Time';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSegundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSegundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSegundaria: '#FFF4D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSegundaria: '#FFEEDF',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) =>{
    // console.log(colaborador)
    // debugger
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">

      <Banner />
      <Form times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSegundaria={time.corSegundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}

    </div>
  );
}

export default App;

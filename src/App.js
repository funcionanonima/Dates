import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form'
import Date from './Components/Date'

function App() {

  // cargar LS al initialstate
  let initialDates = JSON.parse(localStorage.getItem('dates'))

    if(!initialDates){
      initialDates= []
    }

  // creo state global para la app
  const[dates, setDates] = useState(initialDates);

  // agregar citas al state desde el formulario
  const makeDate = date => {    
    const newDates = [...dates, date]
    setDates(newDates)
  }; 

  // Eliminar citas
  const deleteDate = index => {
    const newDates = [...dates];
    newDates.splice(index, 1)
    setDates(newDates)
  }

  useEffect(()=>{
    let initialDates = JSON.parse(localStorage.getItem('dates'))

    if(initialDates){
      localStorage.setItem('dates', JSON.stringify(dates))
    }else{
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [dates])  

  // Cargar titulo condicional
  const title = Object.keys(dates).length === 0 ? 'No hay citas ahún' : 'Adminstra tus citas'

  return (
    <div className="App">
      <header className="App-header"> 
        <img height="50px" src={logo} className="App-logo" alt="logo" />       
        <h3>Oz learning react</h3>
      </header>
      <section className="App-body">
        <div className="cont1">
          <Form
            makeDate={makeDate}
          />
        </div>
        <div className="cont2">
          <h2>{title}</h2>
          {dates.map((date, index) => (
            <Date
              key={index}
              index={index}
              date={date}
              deleteDate={deleteDate}
            />
          ))}
        </div>
      </section>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;

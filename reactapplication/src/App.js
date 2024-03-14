
import { React, useState } from 'react'
import AppRoutes from './Routes';
import './App.css'
import SpringNasaComponent from './Component/SpringNasaComponent'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className= "appdiv">
      
      <AppRoutes/>
          
      </div>
      
    </>
  );
};

export default App;
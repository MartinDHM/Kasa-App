import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Accueil/Accueil';
import Propos from './a_propos/Propos';
import Error from './Error/Error';
import LogementDetails from '../components/logement/LogementDetails';
import datas from '../datas/datas.json'; 

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/propos' element={<Propos />} />
        <Route path='/Logement/:index' element={<LogementDetails data={datas} />} />
        <Route path='*' element={<Error />} />
        <Route path='/erreur' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

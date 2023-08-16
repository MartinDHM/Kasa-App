import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Accueil/Accueil';
import Propos from './a_propos/Propos';
import Error from './Error/Error';
import LogementDetails from '../components/Accueil/LogementDetails';
import datas from '../datas/datas.json'; // Import data from the JSON file

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/propos' element={<Propos />} />
        <Route path='*' element={<Error />} />
        <Route path='/Logement/:index' element={<LogementDetails data={datas} />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Accueil/Accueil';
import Propos from './a_propos/Propos';
import Error from './Error/Error';
import LogementDetails from '../components/logement/LogementDetails';
import datas from '../datas/datas.json'; 

// Composant principal App
function App() {
  return (
    <div className='App'>
      {/* Configuration des routes */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path='/' element={<Home />} />
        {/* Route pour la page "À Propos" */}
        <Route path='/propos' element={<Propos />} />
        {/* Route pour les détails des logements avec l'indice en paramètre */}
        <Route path='/Logement/:index' element={<LogementDetails data={datas} />} />
        {/* Route par défaut pour les erreurs */}
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;







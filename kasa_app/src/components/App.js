import {Routes, Route} from "react-router-dom"
import "../Sass/main.css"
import Home from "./Accueil/Accueil"
import Propos from "./a_propos/Propos";


function App() {
    return (  
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
            </Routes>
        </div>      
    );
  }
  
  export default App;
  
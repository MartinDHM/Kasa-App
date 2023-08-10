import {Routes, Route} from "react-router-dom"
import "../Sass/main.css"
import Home from "./Accueil/Accueil"
import Propos from "./a_propos/Propos";
import Error from "./Error/Error"


function App() {
    return (  
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/propos" element={<Propos />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>      
    );
  }
  
  export default App;
  
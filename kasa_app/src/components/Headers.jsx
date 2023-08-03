import logo from '../assets/logo.jpg'


function headers() {

return (

    <header className="App-header">
      <nav class="navbar-header">
          <div class="main-navlink">
            <a href="#Accueil-title">Accueil</a>
            <a href="#Propos-title">A propos</a>
          </div>
          <h1>
            <a href="#">
              <img src={logo} className="App-logo" alt="logo" /> 
            </a>
          </h1>
        </nav>
  </header>
 
)
}
export default headers;
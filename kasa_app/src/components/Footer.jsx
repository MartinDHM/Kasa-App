import logofooter from '../assets/logo-footer.png'


function footer() {

return (

    <footer>
        <div className="footer-content">
            <img src={logofooter} className="App-logoFooter" alt="logo" />
            <p className='Info-Footer'>© 2020 Kasa. All rights reserved</p> 
        </div>
      </footer>
 
)
}
export default footer;
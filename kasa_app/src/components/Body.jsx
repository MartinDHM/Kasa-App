import BannerHome from '../assets/HomeBanner.jpg'


function Body() {

return (

    <main className='Home-container'>
        <img src={BannerHome} className="Banner-Background" alt="logo" /> 
        <p className='Banner-title'>Chez vous, partout et ailleurs</p>
    </main>
 
)
}
export default Body;
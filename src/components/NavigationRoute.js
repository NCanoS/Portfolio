import {Routes,Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import AboutUs from '../pages/AboutUs';
import Reservation from '../pages/Reservation';


function NavigationRoute() {
    return(
        <Routes>
            <Route path='/#' element={<Jumbotron/>}/>
            <Route path='/#aboutme' element={<AboutMe/>}/>
            <Route path='/#portfolio' element={<Portfolio/>}/>
            <Route path='/#contact' element={<Contact/>}/>
        </Routes>
    )
}
export default NavigationRoute;
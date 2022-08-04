import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TopSocket from './components/topsocket/TopSocket';
import Accomodation from './pages/accomodation/Accomodation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dinning from './pages/dinning/Dinning';
import Meetings from './pages/meetings/Meetings';
import RoomBooked from './components/roombooked/RoomBooked';
import Order from './pages/order/Order';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Navbar/>
     <Routes>
     <Route  exact path='/' element={  <Home/>}/>
     <Route  path='/accomodation' element={ <Accomodation/>}/>
     <Route  path='/dinning' element={ <Dinning/>}/>
     <Route  path='/meetings' element={ <Meetings/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route  path='/booking/:id' element={ <RoomBooked/>}/>
     <Route  path='/order/:id' element={ <Order/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Routes, Route, Router } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Carousal/>
        <Footer/>
    </div>
  );
}

export default App;

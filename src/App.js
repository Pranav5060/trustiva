import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>
        <Routes>
        <Route path='/signup' element={<Signup/>} />
        </Routes>
        <Routes>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Carousal/>
        <Footer/>
        </Router> 
        
    </div>
  );
}

export default App;

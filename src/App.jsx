import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import CoreApp from './pages/CoreApp';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/CoreApp' element={<CoreApp />} />
      </Routes>
    </Router>
  )
}

export default App

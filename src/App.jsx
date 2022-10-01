import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './View/home/Home.jsx';
import LandingPage from './View/landingpage/LandingPage.jsx';
import Nav from './View/nav/Nav.jsx';

function App() {
  

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App

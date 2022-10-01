import './App.css'
import { Route, Routes } from 'react-router-dom';

//Component
import Home from './View/home/Home.jsx';
import LandingPage from './View/landingpage/LandingPage.jsx';
import Nav from './View/nav/Nav.jsx';

//Context
import ArticleState from './Context/Article/ArticleState';
function App() {


  return (
    <ArticleState>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </ArticleState>
  )
}

export default App

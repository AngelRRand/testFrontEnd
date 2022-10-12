import './App.css'
import { Route, Routes } from 'react-router-dom';

//Component
import Home from './View/Home';
import Nav from './Component/Nav.jsx';
import Footer from './Component/Footer';

//Context
import ArticleState from './Context/Article/ArticleState';
function App() {


  return (
    <ArticleState>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer/>
    </ArticleState>
  )
}

export default App

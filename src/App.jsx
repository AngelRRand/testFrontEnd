import './App.css'
import { Route, Routes } from 'react-router-dom';

//Component
import Home from './Pages/home/Home.jsx';
import Nav from './Pages/nav/Nav.jsx';
import Footer from './Pages/footer/Footer';

//Context
import ArticleState from './Context/Article/ArticleState';
function App() {


  return (
    <ArticleState>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer/>
      </div>
    </ArticleState>
  )
}

export default App

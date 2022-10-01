import './App.css'
import { Route, Routes } from 'react-router-dom';

//Component
import Home from './Pages/home/Home.jsx';
import Nav from './Pages/nav/Nav.jsx';

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
      </div>
    </ArticleState>
  )
}

export default App

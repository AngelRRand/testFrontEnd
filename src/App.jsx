
import Home from './View/Home.jsx';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App

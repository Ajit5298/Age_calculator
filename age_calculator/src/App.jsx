import logo from './logo.svg';
import './App.css';
import { Age_Calculator } from './Components/Age_Calculator';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route excat path='/' element={<Age_Calculator />} />
      </Routes>
    </>
  );
}

export default App;

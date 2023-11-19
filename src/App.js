import { Button, Form } from 'react-bootstrap';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;

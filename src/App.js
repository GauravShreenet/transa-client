import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import { PrivateRoute } from './component/PrivateRoute';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;

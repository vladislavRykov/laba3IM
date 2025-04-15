import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses/Courses';
import CoursePage from './components/CoursePage/CoursePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/reg" element={<Registration />} />
      <Route path="/log" element={<Login />} />
    </Routes>
  );
}

export default App;

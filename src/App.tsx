import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses/Courses';
import CoursePage from './components/CoursePage/CoursePage';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

function App() {
  const [users, setUsers] = useState([
    {
      nickname: 'AlexPro',
      password: '123', // зашифрованный пароль
      email: 'alex.pro@example.com',
    },
    {
      nickname: 'MariaCoder',
      password: '1234', // зашифрованный пароль
      email: 'maria.coder@example.com',
    },
    {
      nickname: 'MaxPower',
      password: '12345', // зашифрованный пароль
      email: 'max.power@example.com',
    },
  ]);
  const [currentUser, setCurrentUser] = useState<{
    nickname: string;
    password: string;
    email: string;
  } | null>(null);

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

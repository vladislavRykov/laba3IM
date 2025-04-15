import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import s from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!email || !password) return window.confirm('Одно или несколько полей пусты');
    const foundUser = authCtx?.users.find((user) => user.email === email);
    if (!foundUser) return window.confirm('Пользователь не найден');
    authCtx?.setCurrentUser(foundUser);
    navigate('/home');
    return;
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2 style={{ fontSize: '30px', borderBottom: '1px solid black' }}>Вход</h2>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onClick}>Войти</button>
      </div>
    </div>
  );
};

export default Login;

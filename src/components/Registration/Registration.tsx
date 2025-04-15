import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import s from './Registration.module.scss';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    authCtx?.setCurrentUser({
      nickname: name,
      password,
      email,
    });
    authCtx?.setUsers((prev) => [
      ...prev,
      {
        nickname: name,
        password,
        email,
      },
    ]);
    navigate('/home');
    return;
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2 style={{ fontSize: '30px', borderBottom: '1px solid black' }}>Регистрация</h2>
        <input placeholder="Ник" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onClick}>Регистрация</button>
      </div>
    </div>
  );
};

export default Registration;
